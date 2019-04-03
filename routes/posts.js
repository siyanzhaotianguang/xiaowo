/**
 * Created by MyPC on 2018/7/29
 */

let express = require('express')
let router = express.Router()
let {QueryAccount, QueryPost, ReplyPost, DeletePost} = require('../data/db')
let {InsertPostFunc, GetPostListFunc} = require('../data/post')
let ArgsCheck = require('../function/argsCheck')
let CheckAuth = require('../function/CheckAuth')
let xss = require("xss");

router.post('/', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let uid = req.session.uid
        let {title, content} = req.body
        content = xss(content)
        let uploadData = {title, content}
        if (ArgsCheck(uploadData, 'p', res)) return
        let account = await QueryAccount({uid: uid})
        uploadData.author = account.nickname
        uploadData.uid = account.uid
        await InsertPostFunc(uploadData)
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

router.post('/del', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let {pid} = req.body
        pid = parseInt(pid)
        let uid = req.session.uid
        let post = await QueryPost({pid: pid})
        if (!post) {
            returnData.code = 10002
            returnData.msg = 'pid不正确'
            return res.json(returnData)
        }
        if (post.uid != uid) {
            returnData.code = 10002
            returnData.msg = '你没有这个权限'
            return res.json(returnData)
        }
        await DeletePost({pid})
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

router.get('/filter/search', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let uid = req.session.uid
        let {page} = req.query
        let cUid = parseInt(req.query.uid)
        if (cUid === 0) cUid = uid
        if (!page) {
            returnData.code = 10002
            returnData.msg = '请输入正确的分页'
            return res.json(returnData)
        }
        let postList = await GetPostListFunc({page, uid: cUid})
        returnData.data = postList
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

router.get('/:pid', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let {pid} = req.params
        pid = parseInt(pid)
        let post = await QueryPost({pid: pid})
        if (!post) {
            returnData.code = 10002
            returnData.msg = '请求的数据不存在'
            return res.json(returnData)
        }
        returnData.data = post
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

router.put('/', CheckAuth, async (req, res, next) => {
    let returnData = {code: 0, msg: 'suc'}
    try {
        let uid = req.session.uid
        let {pid, content} = req.body
        pid = parseInt(pid)
        content = xss(content)
        let uploadData = {pid, content}
        if (ArgsCheck(uploadData, 'p', res)) return

        let post = await QueryPost({pid: pid})
        if (!post) {
            returnData.code = 10002
            returnData.msg = '请求的数据不存在'
            return res.json(returnData)
        }
        let account = await QueryAccount({uid: uid})
        uploadData.nickname = account.nickname
        await ReplyPost(uploadData)
        res.json(returnData)
    } catch (e) {
        returnData.code = 10001
        returnData.msg = e
        res.json(returnData)
    }
})

module.exports = router