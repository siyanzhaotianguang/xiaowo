/**
 * Created by MyPC on 2018/7/28
 */

let express = require('express')
let router = express.Router()
let {QueryAccount} = require('../data/db')
let MD5 = require('../function/md5')

router.post('/', async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        // let id = req.session.uid
        if (req.session.uid) return res.json(returnData)
        let {nickname, password} = req.body
        let account = await QueryAccount({nickname: nickname})
        if (!account) {
            returnData.code = 10002
            returnData.msg = '账号不存在'
            return res.json(returnData)
        }
        if (MD5(password) != account.password) {
            returnData.code = 10002
            returnData.msg = '密码错误'
            return res.json(returnData)
        }
        req.session.uid = account.uid
	console.log(`${nickname}登录`)
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        return res.json(returnData)
    }
})

module.exports = router
