const connectedPorts = new Set();

self.addEventListener("connect", ({ports}) => {
    connectedPorts.add(ports[0]);
    console.log(`${connectedPorts.size} unique connected ports`);
});