import fs from "fs/promises";

let a = await fs.readFile("hello.text");
await fs.appendFile("hello.text", "\n\nFrom the sigma web development course");

console.log(a.toString());