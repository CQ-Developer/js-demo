function factorial(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}

self.onmessage = event => self.postMessage(`${event.data}! = ${factorial(event.data)}`);