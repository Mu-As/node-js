const os = require("os");
const path = require("path");
const math = require("./math");
// get all files and props
const { topla } = require("./math");
// get only 1 method from require method
console.log(math.carp(3, 7));
console.log(topla(12, 13));

// console.log(os.type())
// //current operation system
// console.log(os.version())
// //version of os
// console.log(os.homedir())
// //home directory

// console.log(__dirname)
// //directory name of this js file (server.js)
// console.log(__filename)
// //file name of this js file

// console.log(path.dirname(__filename))
// //directory name of the file in ()
// console.log(path.basename(__filename))
// //base name of the file in () -> server.js
// console.log(path.extname(__filename))
// //extension name of the file in () ->.js

// console.log(path.parse(__filename))
