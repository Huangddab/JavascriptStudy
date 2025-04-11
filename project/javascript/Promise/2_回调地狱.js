
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

sendMessage('女神1',
    (reply) => {
        console.log('成功', reply);
    },
    (reply) => {
        console.log('失败', reply)
        sendMessage('女神2',
            (reply) => {
                console.log('成功', reply);
            },
            (reply) => {
                console.log('失败', reply)
                sendMessage('女神3',
                    (reply) => {
                        console.log('成功', reply);
                    },
                    (reply) => {
                        console.log('失败', reply)
                        sendMessage('女神3',
                            (reply) => {
                                console.log('成功', reply);
                            },
                            (reply) => {
                                console.log('失败', reply)
                            }
                        )
                    }
                )
            }
        )

    }
)

// 这种方式就是回调地狱