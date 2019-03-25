
parseInt("1991");               //1991
var number = "1991";
+number;                        //1991
Number(number);                 //1991

Boolean("camilo");              //true
!!"camilo";                     //true => interview ;)
Boolean(~"camilo".indexOf("t")) //false  

// ---------- tips ------------
//The simbole ~ run the operation -(n+1) for instance: -(-1+1) = -0;

[1,2,3,4,1,1,2,4,5].reduce((accum, current)=> {  //{1: 3, 2: 2, 3: 1, 4: 2, 5: 1}
	accum[current] = -~accum[current]
	return accum;
}, {})