//-------- ToPrimitive --------
//https://www.ecma-international.org/ecma-262/10.0/index.html#sec-toprimitive

/*  Converts its input argument to a non-Object type
    1) runs the operation valuesOf() which return a primitive (for ([] or {}) returns itself)
    2) if the previous fails, run toString() and returns its value*/

//-------- String --------
// https://www.ecma-international.org/ecma-262/10.0/index.html#sec-tostring

String(null);                       //"null"
String(true);                       //"true"
String(false);                      //"false"
String(0);                          //"0"
String(-0);                         //"0"
String(1234);                       //"1234"
String({});                         //"[object Object]"
String({name: "camilo"});           //"[object Object]"
String([1,2,3,4]);                  //"1,2,3,4"
String([{name: "camilo"}, 1,2,3])   //"[object Object],1,2,3"

//Method => .toString()

[].toString()                     //""
[1,9,9,1].toString()              //"1,9,9,1"
[null].toString()                 //""
[undefined].toString()            //""
[null, null].toString()           //","
[undefined, undefined].toString() //","
[[], [], [[],[]]].toString()      //",,,"
[[], [], 0, null].toString()      //,,0,
[,,,,].toString()                 //",,,"

// --------- Number ------------
//https://www.ecma-international.org/ecma-262/10.0/index.html#sec-tonumber

Number("");          //0 
Number("0");         //0
Number("-0");        //-0
Number(" 009 ");     //9
Number("3.14159");   //3.14159
Number("0.");        //0
Number(".0");        //0
Number(".");         //NaN
Number(false);       //0
Number(true);        //1
Number(null);        //0
Number(undefined);   //NaN


//First, call toPrimitive() which runs valuesOf(), which is supposed to returns a non-Object type
//(valuesof has definitions from objects, no for arrays, it means to do nothing)
//if valuesOf() is no present (did nothing) or returns resomething no Primitive, ToNumber() is going to be applied, 
//the values converted as a string will become a number
Number({});          //ToString => [object Object] => ToNumber => NaN
Number([]);          //ToString => "" => ToNumber => 0
Number(["1991"]);    //ToString => "1991" => ToNumber => 1991
Number([null]);      //ToString => "" => ToNumber => 0
Number([undefined]); //ToString => "" => ToNumber => 0
Number([1,2,3]);     //ToString => "1,2,3" => ToNumber => NaN
Number([[]]);        //ToString => "" => ToNumber => 0


// --------- Boolean ------------
//Ruled by the truthy and falsy values, the specification only defines the "falsy" values, it means any other values could be considered "truthy"
//https://www.ecma-international.org/ecma-262/10.0/index.html#sec-toboolean

//Falsy
"" // (its length is zero)
0, +0, -0
null
NaN
false
undefined

Boolean("")             //false
Boolean(0)              //false
Boolean(+0)             //false
Boolean(-0)             //false
Boolean(null)           //false
Boolean(NaN)            //false
Boolean(false)          //false
Boolean(undefined)      //false

Boolean(1)              //true
Boolean({})             //true
Boolean([])             //true
Boolean(Infinity)       //true => Interview ;)
Boolean(function(){})   //true => Interview ;)
Boolean(()=>{})         //true => Interview ;)
Boolean(Symbol)         //true


// ------------- Tips --------------

//coercions always result in one of the scalar primitive values, like string, number, or boolean
