node.js install after npm init -y:
npm i express
npm i body-parser
npm i ejs
npm i -g nodemon

make shure you got in package.json after "main": "index.js",:
"type": "module",

run node.js with: 
nodemon index.js
