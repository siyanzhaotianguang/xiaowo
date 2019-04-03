/**
 * Created by MyPC on 2018/7/29
 */
let express = require('express')
let router = express.Router()

router.get("/", function (req, res) {
    let returnData = {code: 0, msg: 'suc'}
    //req.session.cookie.maxAge=0;  //重新设置过期时间来销毁。cookie中保存有sessionID
    req.session.destroy(function (err) {  //通过destroy()函数销毁session
        if (err) console.log(err)
    })
    res.json(returnData)
})

module.exports = router