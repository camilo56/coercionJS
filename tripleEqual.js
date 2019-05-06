
"0" === false;                      //false
0 === false;                        //false
0 === [];                           //false
"" === false;                       //false
[] === false;                       //false
[] === "";                          //false
0 === "";                           //false
NaN === "";                         //false
NaN === NaN;                        //false
-0 === 0;                           //false
-0 === +0;                          //false

Number("") === 0;                   //true
Number(false) === 0;                //true
Number([]) === 0;                   //true
Number(null) === 0;                 //true

String([]) === "";                  //true
String([null]) === "";              //true
String([undefined]) === "";         //true
