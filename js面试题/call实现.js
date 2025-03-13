// Function.prototype.hyCall = function (context, ...args) {
//     // 处理上下文（兼容浏览器和Node环境）
//     const ctx = context === undefined || context === null ?
//         (typeof window !== 'undefined' ? window : global) : Object(context)
//     // 创建唯一属性 避免污染
//     const fnKey = Symbol('tempFn')
//     // 绑定当前函数到上下文
//     ctx[fnKey] = this
//     // 执行函数并保存结果
//     const result = ctx[fnKey](...args)

//     // 清理临时属性（处理原始值包装的特殊情况）
//     try {
//         delete ctx[fnKey]
//     } catch (e) {
//         // 处理原始值包装对象不可删除属性的情况
//         if (ctx instanceof Number || ctx instanceof String || ctx instanceof Boolean) {
//             ctx[fnKey] = undefined
//         }
//     }
//     return result
// }

Function.prototype.hyCall = function (content, ...args) {
    const ctx = content === undefined || content === null ? (typeof window !== 'undefined' ? window : global) : Object(content)
    const fnKey = Symbol('temKey')
    ctx[fnKey] = this
    const result = ctx[fnKey](...args)

    delete ctx[fnKey]
    return result
}

// 测试用例
const obj = { name: 'Hello' }

function showInfo(age, phone) {
    console.log(`姓名: ${this.name}, 年龄: ${age}, 电话: ${phone}`)
}

showInfo.hyCall(obj, 25, '13800138000')
// 输出：姓名: Hello, 年龄: 25, 电话: 13800138000

// 原始值测试
function showNumber() {
    return +this
}
console.log(showNumber.hyCall(123)) // 输出：123





