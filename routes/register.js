/**
 * Created by MyPC on 2018/7/28
 */

let express = require('express')
let router = express.Router()
let ArgsCheck = require('../function/argsCheck')
let {InsertAccountFunc} = require('../data/account')

router.post('/', async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let {nickname, password} = req.body
        let uploadData = {nickname, password}
        if (ArgsCheck(uploadData, 'a', res)) return
        await InsertAccountFunc(uploadData)
        res.json(returnData)
    } catch (e) {
        console.log('register err :',e)
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

module.exports = router