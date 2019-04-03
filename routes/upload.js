/**
 * Created by MyPC on 2018/8/1
 */

let express = require('express')
let router = express.Router()
let CheckAuth = require('../function/CheckAuth')
let multer = require('multer')
const {GetRootUrlReg, GetFileAfterNameReg} = require('../config/regex')
let {QueryAccount} = require('../data/db')

const ProjectRootUrl = (GetRootUrlReg.exec(process.cwd()))[0]
const {SERVER_URL} = require('../config/serverConfig')
let imgUrl = '/public/images'

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(SERVER_URL + imgUrl)
        cb(null, ProjectRootUrl + imgUrl)
    },
    filename: function (req, file, cb) {
        let afterName = (GetFileAfterNameReg.exec(file.originalname))[0]
        cb(null, file.fieldname + '-' + Date.now() + afterName)
    }
})
let upload = multer({storage}).array('img', 5)

router.post('/', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, errno: 0, data: []}
    if(req.session.uid){
        let uid = req.session.uid
        let user = await QueryAccount({uid})
        if(user.auth<2){
            returnData.errno = 10002
            return res.json(returnData)
        }
    }
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            returnData.errno = 10001
            return res.json(returnData)
        }
        let fileDesArr = []
        for (let i = 0; i < req.files.length; i++) {
            let file = req.files[i]
            fileDesArr.push(SERVER_URL + '/images/' + file.filename)
        }
        returnData.data = fileDesArr
        return res.json(returnData)
    })
})

module.exports = router
