//Js has types, it's variables does not
//Array is a type of Object

typeof "1991";        // "string"
typeof 1991;          // "number"
typeof true;          // "boolean"
typeof milo;          // "undefined"
typeof null;          // "object" ???? in the end, you are going to know why ;)
typeof function(){};  // "function"
typeof {};            // "object"


//the outcome of 'typeof' is a string with the name of the type, that is tricky and some times it is use in interviews
typeof typeof 1991;   // "string"
typeof typeof false;  // "string"
typeof typeof null;   // "string"