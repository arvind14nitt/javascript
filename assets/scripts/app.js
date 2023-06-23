import {myName} from "./util.js" ; //to import a variable from util.js file
import {myBrother, mySister as sibling} from "./util.js"; //to import comma-separated variables
import myNickName from "./util.js"; // this is default, for variable we can use anyname but there is no curly braces around
import * as util from "./util.js";//import everything as a module
//import {myName, mySister as sibling} from "./util.js";//as used to make alias of mySister
console.log(myName);
console.log(myNickName);
console.log(myBrother);
//console.log(mySister);
console.log(util.default);
console.log(util.myName);
console.log(util.myBrother);
//console.log(util.mySister);
console.log(sibling);
//alert('Hello World, ${myName}');

