let age = "44"

//if let age = "44abc" it will convert and output will show number but when we check the value of number it will show NaN
//if we write the about as let age = 44 then in output it will show us as number

// two methods to find typeof 
console.log(typeof age);
console.log(typeof (age));

//conversion of string to number 
let valueInNumber = Number(age)
console.log(typeof valueInNumber);

/*

"33"     => converted to number
"33abc"  => converted to NaN 
true => 1 ; false => 0

1 => true 
0 => false
"" => false
"satakshi" => true
*/ 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



/***********OPERATIONS******************/

let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"

let str2 ="satu"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);         // 12
console.log(1+"2");         //12
console.log("1" + 2+2 );    //122
console.log(1 + 2+"2" );    //32

console.log(+true)  // Output 1
console.log(+"")    // Output 0





