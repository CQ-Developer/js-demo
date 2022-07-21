/**
 * 11.3.3_2 利用平行执行
 * 
 * 如果使用await时不留心, 则很可能错过平行加速的机会
 * 下面例子, 其中顺序等待了5个随机的超时
 */
async function randomDelay(id) {
    // 延迟 0~1000毫秒
    const delay = Math.random() * 1000;
    return new Promise(resolve => setTimeout(() => {
        console.log(`${id} finished`);
        resolve();
    }, delay));
}

async function aoo() {
    const time = Date.now();
    await randomDelay(0);
    await randomDelay(1);
    await randomDelay(2);
    await randomDelay(3);
    await randomDelay(4);
    console.log(`${Date.now() - time}ms elapsed`);
}

aoo();

/**
 * 用一个for循环重写
 */
async function boo() {
    const time = Date.now();
    for (let i = 0; i < 5; i++) {
        await randomDelay(i);
    }
    console.log(`${Date.now() - time}ms elapsed`);
}

boo();

/**
 * 就算这些Promise之间没有依赖, 异步函数也会依次暂停, 等待每个超时完成
 * 这样可以保证执行顺序, 但总执行时间会边长
 * 
 * 如果顺序不是必须保证的, 那么可以先一次性初始化所有Promise, 然后再分别等待它们的结果
 */
async function randomDelayC(id) {
    const delay = Math.random() * 1000;
    return new Promise(resolve => setTimeout(() => {
        setTimeout(console.log, 0, `${id} finished`);
        resolve();
    }, delay));
}

async function coo() {
    const time = Date.now();

    const p0 = randomDelayC(0);
    const p1 = randomDelayC(1);
    const p2 = randomDelayC(2);
    const p3 = randomDelayC(3);
    const p4 = randomDelayC(4);

    await p0;
    await p1;
    await p2;
    await p3;
    await p4;

    setTimeout(console.log, 0, `${Date.now() - time} elapsed`);
}

coo();

/**
 * 用数组和for循环再包装一下
 */
async function randomDelayD(id) {
    const delay = Math.random() * 1000;
    return new Promise(resolve => setTimeout(() => {
        console.log(`${id} finished`);
        resolve();
    }, delay));
}

async function doo() {
    const time = Date.now();

    const promises = Array(5).fill(null).map((_, i) => randomDelayD(i));

    for (const promise of promises) {
        await promise;
    }

    setTimeout(console.log, 0, `${Date.now() - time} elapsed`);
}

doo();

/**
 * 注意, 虽然Promise没有按照顺序执行, 但await按顺序收到了每个Promise的值
 */
async function randomDelayE(id) {
    const delay = Math.random() * 1000;
    return new Promise((resolve, reject) => setTimeout(() => {
        console.log(`${id} finished`);
        resolve(id);
    }, delay));
}

async function eoo() {
    const time = Date.now();

    const promises = Array(5).fill(null).map((_, i) => randomDelayD(i));

    for (const promise of promises) {
        console.log(`awaited ${await promise}`);
    }

    setTimeout(console.log, 0, `${Date.now() - time} elapsed`);
}

eoo();
