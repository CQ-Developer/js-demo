/**
 * 20.3.2_2 流解码
 * 
 * TextDecoderStream其实就是TransformStream形式的TextDecoder
 * 
 * 将编码后的文本流通过管道输入流解码器会得到解码后文本块的流
 * 
 * 文本解码器流能够识别可能分散在不同块上的代理对
 * 解码器流会保持块片段直到取到完整的字符
 * 
 * 文本解码器流经常与fetch()一起使用, 因为响应体可以作为ReadableStream来处理
 */
async function* chars() {
    // 每个块必须是一个定型数组
    const encodedText = [102, 111, 111].map(x => Uint8Array.of(x));
    for (let char of encodedText) {
        yield await new Promise(resolve => setTimeout(resolve, 1000, char));
    }
}

const encodedTextStream = new ReadableStream({
    async start(controller) {
        for await (let chunk of chars()) {
            controller.enqueue(chunk);
        }
        controller.close();
    }
});

const decodedTextStream = encodedTextStream.pipeThrough(new TextDecoderStream());

const readableStreamDefaultReader = decodedTextStream.getReader();

(async function () {
    while (true) {
        const { done, value } = await readableStreamDefaultReader.read();
        if (done) {
            break;
        } else {
            console.log(value);
        }
    }
})();

// 与fetch()一起使用
const response = await fetch(url);
const stream = response.body.pipeThrough(new TextDecoderStream());
const decodedStream = stream.getReader();
for await (let decodedChunk of decodedStream) {
    console.log(decodedChunk);
}
