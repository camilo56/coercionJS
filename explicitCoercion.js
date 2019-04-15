
//The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix.
//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-parseint-string-radix
parseInt("1991");               //1991
parseInt("    1991"); 			//1991

//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-unary-operators
var number = "1991";
+number;                        //1991
Number(number);                 //1991

Boolean("camilo");              //true

//runs ToBoolean, If oldValue is true, return false
!"camilo";                      //false

!!"camilo";                     //true => interview ;)

//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-bitwise-not-operator
Boolean(~"camilo".indexOf("t")) //false  

// ---------- tips ------------
//The simbole ~ run the operation -(n+1) (The abstract operation ToInt32) for instance: -(n+1) = -0;

[1,2,3,4,1,1,2,4,5].reduce((accum, current)=> {  //{1: 3, 2: 2, 3: 1, 4: 2, 5: 1}
	accum[current] = -~accum[current]
	return accum;
}, {})