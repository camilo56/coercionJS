
null == undefined;                   //true
undefined == null;                   //true

//cero is no coerced, false is coerted to number;
0 == false;                          //true
"0" == 0;                            //true

false == 0;                          //true
null == false;                       //false 
Infinity == false;                   //false

//"1991" is coerted to a number (1991), next true as well (1), finally compare (1991 == 1;) => false
"1991" == true;                      //false
true == "1";                         //true
true == "2";                         //false

//First at all get the primitive of empty array which is and empty string (""), after that become it to a number (0) 
//next become false to a number Number(false) => 0, the comparison is going to be (0 == 0;) => true 
[] == false;                         //true 

0 == false;                          //true
0 == [];                             //true
"" == false;                         //true
[] == false;                         //true
[] == "";                            //true
0 == "";                             //true
"0" == [];                           //false

//the second empty array (truthy value) is become to false, after that, the first empty array is coerced to (0), 
//next the false (which use to be the second empty array) is coerced to (0) as well and finally the comparison is (0 == 0;) => true
[] == ![];                         //true Interview ;)


// ------------- Tip -------------
//== doing more work