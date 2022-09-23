const globalToken = "bar";

console.log(`importing scripts in ${self.name} with ${globalToken}`);

// importScripts("./scriptA.js");
// importScripts("./scriptB.js");

// 下面这行代码和上面两行代码效果相同
importScripts("./scriptA.js", "./scriptB.js");

console.log("scripts imported");