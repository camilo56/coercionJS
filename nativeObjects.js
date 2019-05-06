//if the Native (String, Number, Object and Boolean) are invoked with the reserved keyword "new" (native constructos) 
//the outcome is going to be wrapped in a object

new String(1991);      //String{"1991"}
new Number("1991");    //Number{1991}
new Object();          //{}
new Boolean("true");   //String{True}
new Function("console.log('milo')");  //ƒ anonymous() {console.log('milo')}
new Array(3);          //(3) [empty × 3]. Empty array with the property "length" as 3
new RegExp("^a", "g"); // /^a/g
new Date();            //Current date
new Error("Camilo");   //Error: Camilo

//----------- As a native functions -----------

String(1991);      //"1991"
Number("1991");    //1991
Number("camilo");  //Nan
Object();          //{}
Boolean("true");   //True
Boolean(1234);     //True

/* ------- Tips ------- */

//- avoid creating an array with the native constructor, use this way instead
var users = ["Camilo", "Cristian", "Chris"]

//In case of needing to crate an array with N position and fill it, this EC2015 it's a good idea
Array.from({length: 2}, (item, index)=> `user${index}`) // ["user0", "user1"]

//It is not a good a idea create Objects with the Native constructor, this is a better choice
var properties = {name: "camilo", lastName: "colorado"}

//Function's native constructor is rarely used, the most common ways of writing a functions are these
function myFunction(){ /* My code*/}
var myFunction2 = function (){ /* My code*/}
var myFunction2 = () => { /* My code*/}

//Just for fun
var milo = "I'm in global";
var camilo = new Function("console.log(`Im from a service, ${milo}`)")
camilo();      //Im from a service, I'm in global

//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-fundamental-objects
