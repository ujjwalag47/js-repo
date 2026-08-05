let score="33"
// console.log(typeof score)
// console.log(typeof (score))

score=null
valueInnumber =Number(score)
// console.log(typeof valueInnumber) //number
// console.log(valueInnumber) // 0

score=undefined
valueInnumber =Number(score)
// console.log(typeof valueInnumber) //number
// console.log(valueInnumber) // NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

score="Ujjwal"
valueInnumber =Number(score)
// console.log(typeof valueInnumber) //number
// console.log(valueInnumber) //Nan

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let somenumber=33
let stringnumber=String(somenumber)
// console.log(stringnumber);
// console.log(typeof stringnumber)


// ****************** Operations *********************

let value=3
let negvalue= -value
console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1="hello"
// let str2=" ujjwal"
// let str3=str1 + str2
// console.log(str3)

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
//Dont write confusing like above,write proper and use()
// console.log( (3 + 4) * 5 % 3);

console.log(true) //true
console.log(+true) //1
//console.log(true+) //error
console.log(+"") //0

let num1,num2,num3
num1=num2=num3=2+2
console.log(num2)

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
