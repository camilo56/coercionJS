//Nan: Not a number

console.log("a" / 1); //NaN  
console.log(1 / 0);   //Infinitive
console.log(0 / -3);  //-0

//the type of these values is "number"

typeof NaN;           //"number"
typeof 0;             //"number"
typeof -0;            //"number"
typeof Infinity;      //"number"

/* ------- Tips ------- */
//to determine is a negative cero (-0) to use:
Object.is(-0, -0)     //true

//NaN is the unique value in JS that is different from itself
NaN === NaN           //false

//the function isNaN (https://www.ecma-international.org/ecma-262/9.0/index.html#sec-isnan-number) can help us to know whether or not a value be NaN
isNaN(false)          //false
isNaN("camilo")       //true

//other new option (https://www.ecma-international.org/ecma-262/9.0/index.html#sec-number.isnan)
Number.isNaN(false)   //false
Number.isNaN("camilo")//false
Number.isNaN(NaN)//true

//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-terms-and-definitions-number-value