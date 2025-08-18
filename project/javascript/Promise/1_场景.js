// 场景：
// 向某位女生表白 成功 则在一起
// 不成功 则向下一个女生表白 直到成功

// name：女生的名字
// onFullffiled:成功后回调
// onRejected:失败后回调

function sendMessage(name, onFullffiled, onRejected) {
    // 模拟表白
    console.log(`男->${name}:我喜欢你，在一起把`);
    // 模拟女生回复需要时间
    console.log(`等待${name}的回复...`);
    setTimeout(() => {
        // 随机生成一个布尔值
        const result = Math.random() > 0.5;
        if (result) {
            console.log(`${name}：好的，我也喜欢你`);
            onFullffiled(name);
        } else {
            console.log(`${name}：对不起，我不喜欢你`);
            onRejected(name);
        }
    }, 1000);
}

sendMessage('女神', (reply) => {
    console.log('成功', reply);
}, (reply) => {
    console.log('失败', reply)
})

// 总共有四个女生 封装告白这个动作