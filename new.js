const fs = require("fs");
let text = fs.readFileSync("test.txt","utf-8");
 text = text.replace("sample", "poggers");
console.log(text);

fs.writeFileSync("new.txt",text);
// blocking code