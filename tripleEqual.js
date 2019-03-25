
"0" === false? "Yes": "No";         //"No"
0 === false? "Yes": "No";           //"No"
0 === []? "Yes": "No";              //"No"
"" === false? "Yes": "No";          //"No"
[] === false? "Yes": "No";          //"No"
[] === ""? "Yes": "No";             //"No"
0 === ""? "Yes": "No";              //"No"

Number("") === 0;                   //true
Number(false) === 0;                //true
Number([]) === 0;                   //true
Number(null) === 0;                 //true

String([]) === "";                  //true
String([null]) === "";              //true
String([undefined]) === "";         //true