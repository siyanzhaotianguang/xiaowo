/**
 * Created by MyPC on 2018/7/28
 */
let {InsertAccount, GetNextUniqueId, QueryAccount} = require('./db')
let MD5 = require('../function/md5')

async function InsertAccountFunc(data) {
    let dbAccount = await QueryAccount({nickname: data.nickname})
    if (dbAccount) return Promise.reject('用户名重复')
    let uid = await GetNextUniqueId('uid')
    let now = Date.now()
    data.uid = uid
    data.createTime = now
    data.updateTime = now
    data.auth = 1
    data.password = MD5(data.password)
    await InsertAccount(data)
}

module.exports = {InsertAccountFunc}