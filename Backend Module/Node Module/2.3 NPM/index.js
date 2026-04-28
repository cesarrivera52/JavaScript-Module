//var generateName = require('sillyname'); // require() is a function that is used to import modules in Node.js. It takes a string argument that specifies the name of the module to be imported. In this case, we are importing the 'sillyname' module, which is a package that generates random silly names.

//import generateName from "sillyname"; // This is an ES6 import statement that imports the default export from the 'sillyname' module and assigns it to the variable 'xxx'. However, this syntax is not supported in Node.js without additional configuration, so it may not work as expected.
//var sillyName = generateName();

//console.log(`My name is ${sillyName}`);


import { randomSuperhero } from "superheroes";
const name = randomSuperhero();


console.log(`My name is ${name}`);



