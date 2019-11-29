const path = require('path')
const fs = require('fs')
//const mdLinks = require("...");
//const marked = require('marked');
//const fetch = require('node-fetch');

console.log("¡FUNCIONAAA!")

const readerMd = (path) =>{
  return new Promise((resolve, reject) => {
    fs.readFile(path , 'utf-8', (err, data) => {
      if (err) {
       console.log('no existe')
      }
      resolve(data)
      console.log(data)
    })
  });
}
console.log("Please!!!")
readerMd('./README.md');
module.exports = () => {
 
};
