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
console.log(5+10);//+ can be used as addition operator
console.log("My name is"+" "+"Arvind Yadav");//+ used as concatenation operator
console.log(5*10);//* operator
console.log(10/5);//division operator
console.log(10+5/5);//
console.log(10===10);//equal operator
console.log(10>5);//greater than

//-----------------------------------------------------------
//Functions and Parameters
//---------------------------------------
function display_name(name = "Arvind Yadav"){
   console.log(name);
}

display_name();
display_name("Rishabh Yadav");

function return_sum(a,b){
   return a+b;
}

const sum = return_sum(10,20);
console.log(sum);

let sum_var = return_sum(5,15);
console.log(sum_var);

//--------------------------------------------
//Arrow functions ()=>{}
//---------------------------------------
// These functions doesnt need a name
//for sum
(a,b)=>{return a=b;}

//Objects and classes
//Objects can be used to group multiple values
const user = {    // we have created a object
   name: "Arvind", 
   age: 35
};
console.log(user.name);
console.log(user.age);//user is the object

//Objects can also store functions-

const user1 = {
	name: "Arvind",
	age: 35,
	display_name(){
		console.log(this.name);
	},
	display_age(){
		console.log(this.age);
	},
	edit_name(name){
		this.name = name;
	}

};

user1.display_name();
user1.edit_name("hoi poi");
user1.display_name();


//CLasses created the blue print to create the object
class user2{
	greet(){console.log(name)}
	greet_with_hello(){console.log("hello")}
	constructor(name){this.name = name}

};

const user2_obj = new user2("MoJo MoJo");
console.log(user2_obj.greet_with);


//Arrays and Array like method map
const hobbies = [];//empty array
console.log(hobbies);

const hobbies1 = ["playing", "gaming", "coding"];
console.log(hobbies1[1]);

//arrays have some pre-defined methods in javascript which we can use like push, findIndex etc

const arr = hobbies1.map((item)=> "text" + item);

console.log(arr[2]);
