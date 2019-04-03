/**
 * Created by MyPC on 2018/7/29
 */

const {ArgsRules, RuleFunc} = require('../config/argsRules')

function ArgsCheck(args, type, res) {
    let returnData = {code: 10002, msg: ''}
    for (let argName in args) {
        let value = args[argName]

        let checkArgName = type + '_' + argName
        let checkRule = ArgsRules[checkArgName]
        if (checkRule) {//如果格式表中存在
            let checkFunc = RuleFunc[checkRule]
            if (!checkFunc(value)) {
                returnData.msg = `${argName} 格式错误`
                return res.json(returnData)
            }
        } else {//如果格式表中不存在
            if (!value && value !== 0) {
                returnData.msg = `${argName} 格式错误`
                return res.json(returnData)
            }
        }
    }
    return null
}

module.exports = ArgsCheck