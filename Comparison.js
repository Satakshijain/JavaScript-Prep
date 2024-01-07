console.log(2>1);
console.log(2>=1);
console.log(2<1);

console.log("2">1);
console.log("02">1);

// Comparison of Null

console.log(null > 0);        //Output -> false
console.log(nul == 0);       //Output -> false
console.log(null >= 0);     //Output -> true

console.log(undefined > 0);        //Output -> false
console.log(undefined == 0);       //Output -> false
console.log(undefined >= 0);       //Output -> false

// STRICT CHECK -> it also check the data type and the values

console.log("2" === 2);


/*Equality check and comparison work differntl
comparisons convert null to s number treating it as a zero that's why null >= 0 is true 
*/

//while comparison data type must be same because if we compare different data type then it will not give predictable results


