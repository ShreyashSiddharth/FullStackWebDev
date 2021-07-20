const fs = require("fs");
const { read } = require("fs/promises");
let txt = fs.readFile("new.txt","utf-8",(a,b) => {
    console.log(a,b);
});
console.log("sample message");
// asynchorus or non blocking code 