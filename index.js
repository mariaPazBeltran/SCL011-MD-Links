const path = require('path')
const fs = require('fs')
const marked = require('marked');
//const mdLinks = require("...");

//const fetch = require('node-fetch');

console.log("¡FUNCIONAAA!")

/*comprobando si el formato de los archivos es md */
const checkingMdFormat = (path =>{

  if(path.slice(-3)== '.md'){
    console.log(path)
    return true;
  }else {
    console.log(Error)
    return false;
  }
})

/*Lector de archivos*/
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

const extractingLinks = (() =>{
  return new Promise((resolve, reject) =>{
  readerMd()
  .then(data =>{
    let links = [];  
    let renderer = new marked.Renderer();
    
    renderer.link= function(href, title, text) {
        links.push(
          {href: href,
          text: text,
          file: path,
          });
    };
    marked(data, { renderer: renderer });
   if (links.length === 0) {
      reject(new Error("El archivo no contiene links"))
  } 
    resolve(links)
    console.log(links)
  })
  .catch(err =>{
   reject (console.log(err));
    
  })
  })
  })
  

  



console.log("Please!!!")

//readerMd('./README.md');
checkingMdFormat('./README.md')
extractingLinks('./README.md')

module.exports = () => {
 
};
