self.addEventListener("message", ({data}) => {
    // 32
    console.log(`worker's buffer size: ${data.byteLength}`);
});