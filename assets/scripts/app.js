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
//---------------------------------------------------------
// const and variables
//---------------------------------------------------------
console.log("Hello const and variables!");// here we have created a string on need
let var1 = "here is next value";// created variable and store the string
console.log(var1);
console.log(var1);// we re-use the var again

console.log("constant can be defined using const keyword");
const var2 = "here is another val"; // this is readable, cant be modified
console.log(var2);
console.log(var2);//reused
//var2 = "here another assignment";//re-assignment doesn't work with const
var1 = "variables can be re-assigned";//variable re-assignment work
console.log(var1);

//----------------------------------------------------------
//operators
//----------------------------------------------------------
