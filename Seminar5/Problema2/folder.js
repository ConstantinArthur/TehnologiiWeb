const fs = require('fs');
const rimraf = require('rimraf');

fs.writeFileSync('test.txt','BlaBla');

const content=fs.readFileSync('test.txt','utf-8');
console.log(content);

fs.unlinkSync('test.txt');
fs.mkdirSync('FolderNou');
fs.rmdir('FolderNou');