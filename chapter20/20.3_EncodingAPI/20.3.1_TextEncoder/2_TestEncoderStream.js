/**
 * 20.3.1_2 流编码
 * 
 * TextEncoderStream其实就是TransformStream形式的TextEncoder
 * 
 * 将解码后的文本流通过管道输入编码器会得到编码后的文本块的流
 */
async function* chars() {
    const decodedText = "foo";
    for (let char of decodedText) {
        yield await new Promise(resolve => setTimeout(resolve, 1000, char));
    }
}

const decodedTextStream = new ReadableStream({
    async start(controller) {
        for await (let chunk of chars) {
            controller.enqueue(chunk);
        }
        controller.close();
    }
});

const encodedTextStream = decodedTextStream.pipeThrough(new TextEncoderStream());

const readableStreamDefaultReader = encodedTextStream.getReader();

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