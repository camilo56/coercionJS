//Js has types, it's variables does not
//Array is a type of Object

typeof "1991";        // "string"
typeof 1991;          // "number"
typeof true;          // "boolean"
typeof milo;          // "undefined"
typeof null;          // "object" ???? historical reasons "primitive value that represents the intentional absence of any object value"
typeof function(){};  // "function" an object with method "call"
typeof {};            // "object"


//the outcome of 'typeof' is a string with the name of the type, that is tricky and some times it is use in interviews
typeof typeof 1991;   // "string"
typeof typeof false;  // "string"
typeof typeof null;   // "string"

//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-typeof-operator-runtime-semantics-evaluation