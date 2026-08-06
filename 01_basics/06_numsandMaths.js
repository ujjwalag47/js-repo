const score=400
// console.log(score) //400
const balance=new Number(score)
// console.log(balance)  //[Number: 400]
// console.log(balance.toString()) //400
// console.log(balance.toString().length) //3
// console.log(balance.toFixed(2)) //400.00

const otherNumber=23.86654
// console.log(otherNumber.toPrecision(4)) //23.87

const hundreds=1000000
// console.log(hundreds.toLocaleString()) //1,000,000
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000


//++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)  //Object [Math] {}
// console.log(Math.abs(-5)) //5
// console.log(Math.round(5.6)) //6
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.8)) //4
// console.log(Math.min(4,5,7,9))
// console.log(Math.max(4,5,7,9))

console.log(Math.random()) // random values which lies between 0 and 1
console.log((Math.random()*10)+1) //Multiply by 10 aur add 1 isliye kara taaki value 1 to 10 aaye
console.log(Math.floor(Math.random()*10)+1) //floor isliye liya taaki min value rahe

const min=1
const max=6
console.log(Math.floor((Math.random()*(max-min+1))+min)) //ye kisi bhi range ke andar laani hai value to uska formula hai jaise upar humne 1 se 10 ke beech mai la rahe the