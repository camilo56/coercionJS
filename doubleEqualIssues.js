//cero is no coerced, false is coerted to number;

0 == false ? "Yes": "No";          //"Yes"
null == false ? "Yes": "No";       //"No" 
Infinity == false ? "Yes": "No";   //"No"

//"1991" is coerted to a number (1991), next true as well (1), finally compare (1991 == 1) => false
"1991" == true ? "Yes": "No";      //"No"

//First at all get the primitive of empty array which is and empty string (""), after that become it to a number (0) 
//next become false to a number Number(false) => 0, the comparison is going to be (0 == 0) => true 
[] == false ? "Yes": "No";         //"Yes" 

"0" == false? "Yes": "No";         //"Yes"
0 == false? "Yes": "No";           //"Yes"
0 == []? "Yes": "No";              //"Yes"
"" == false? "Yes": "No";          //"Yes"
[] == false? "Yes": "No";          //"Yes"
[] == ""? "Yes": "No";             //"Yes"
0 == ""? "Yes": "No";              //"Yes"

//the second empty array (truthy value) is become to false, after that, the first empty array is coerced to (0), 
//next the false (which use to be the second empty array) is coerced to (0) as well and finally the comparison is (0 == 0) => true
[] == ![];                         //true Interview ;)


// ------------- Tip -------------
//== doing more work