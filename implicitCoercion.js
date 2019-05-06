//(- , /, * and %) are an operations for numbers, it means if it get some value diferent to a number it'll be coerced as number first

"1991" - 0;         //1991
"1991" - "";        //1991
"1991" - "1";       //1990
"1991" / "1";       //1991
"1991" * "1";       //1991
1991 * "";          //0
1991 / "";          //Infinity

// unlike the other ones (+) operator has two meaning, a sum only if both of the values are number, or addition if one of the values is a string 
1991 + "";          //"1991";
1991 + "5";         //"19915";
1991 + 1;           //"1992";

//conditionals always required boolean values, if they get something different that value is going to be coerced as a boolean

"" ? "Yes": "No";                  //"No"
0 ? "Yes": "No";                   //"No"
Infinity? "Yes": "No";             //"Yes"
null? "Yes": "No";                 //"No"
[] ? "Yes": "No";                   //"Yes"

// (|| and &&) test the values (if it is truthy or falsy), if the value is truthy they do not return the boolean, return the expresion value itself

// (||) returns the value which is truthy (does no matter where it is, keeps checking all the expression till found some truthy, if not returns the last value)
undefined || "camilo";          //"camilo"
"cristian" || "camilo";         //"cristian"
Infinity || "camilo";           //Infinity
false || null || "camilo";      //"camilo"
false || null || undefined;     //undefined

//(&&) check all the expression if all the elements are truthy returns the last truthy value,
//if one of them is falsy return it is returned as soon as they found it up

1991 && true                    //true
12 && 1991 && true && "camilo"; //"camilo"
12 && 234 && true && undefined; //undefined
0 && 234 && true && undefined;  //0
