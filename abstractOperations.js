//-------- String --------
String(null);            //"null"
String(true);            //"true"
String(false);           //"false"
String(0);               //"0"
String(-0);              //"0"
String(1234);            //"1234"
String({});              //"[object Object]"
String({name: "camilo"});//"[object Object]"

//Method => .toString()

[].toString()                     //""
[1,9,9,1].toString()              //"1,9,9,1"
[null, null].toString()           //","
[undefined, undefined].toString() //","
[[], [], [[],[]]].toString()      //",,,"
[[], [], 0, null].toString()      //,,0,
[,,,,].toString()                 //",,,"

// --------- Number ------------

Number("");          //0 Evel
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

//First, call toPrimitive() operation which runs valuesOf(), which is supposed to returns primitive 
//(valuesof has definitions from objects, no for arrays, it means to do nothing)
//if valuesOf() is no present (did nothing) or returns resomething no Primitive ToString() is going to be applied, 
//the values converted as a string will become a number
Number({});          //NaN
Number([]);          //0
Number(["1991"]);    //1991
Number([null]);      //0 ???
Number([undefined]); //0 ???
Number([1,2,3]);     //NaN
Number([[]]);        //0


// --------- Boolean ------------
//Ruled by the truthy and falsy values, the specification only defines the "falsy" values, it means any other values could be considered "truthy"

//Falsy
""
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


// ------------- Tips --------------

//coercions always result in one of the scalar primitive values, like string, number, or boolean