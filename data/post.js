/**
 * Created by MyPC on 2018/7/29
 */
let {QueryPost, GetPostList, InsertPost, GetNextUniqueId} = require('./db')

async function InsertPostFunc(data) {
    let pid = await GetNextUniqueId('pid')
    let now = Date.now()
    data.pid = pid
    data.createTime = now
    data.updateTime = now
    let content = []
    content.push({nickname: data.author, time: now, content: data.content})
    data.content = content
    await InsertPost(data)
}

async function GetPostListFunc(cnd) {
    let {page, uid} = cnd
    let cond = {}
    if (uid) cond.uid = uid
    let option = {limit: 10, skip: (page - 1) * 10, projection: {}, sort: [['updateTime', -1]]}
    let postList = await GetPostList(cond, option)
    _getReplyCountFromList(postList[0])
    return postList
}

function _getReplyCountFromList(postList) {
    for (let i = 0; i < postList.length; i++) {
        let post = postList[i]
        if (post.content) {
            post.replyCount = post.content.length - 1
            delete post['content']
        }
    }
}

module.exports = {InsertPostFunc, GetPostListFunc}
