// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //true
// console.log("02" > 1);//true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//the reason is that an equality check and compaarisons >< >= <= work differently
//comparions convert null to a number,treating it as 0

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === 
console.log("2"==2) //true
console.log("2" === 2); //false