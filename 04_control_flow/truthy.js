const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}  //Got user email

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// } //Array is empty

const emptyObject={}
if(Object.keys(emptyObject).length==0) console.log("object is empty") //object is empty
//Object.keys(emptyObject) ye hume array return karta hai pahle object mai padh rakha hai


// Nullish Coalescing Operator (??): null undefined

let val1,val2;
val1 =5 ?? 10
// console.log(val1) //5
val1=null ?? 10
// console.log(val1) //10
val1=undefined ?? 15
// console.log(val1) //15
val1=undefined ?? null
// console.log(val1) //null 
val1 = null ?? 10 ?? 20
// console.log(val1) //10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") //more than 80