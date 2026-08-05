//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//Javascript is dynmaic in nature as we dont have to define which datatype are we using in front of the value
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(anotherId)
console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros=["a","b","c"]

let myObj={
    name: "ujjwal",
    age: 20,    
}

const myfunction=function(){
    console.log("Hello World")
}


console.log(typeof outsideTemp);
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function(sometimes function object)
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non-Primitive)
// Stack=> koi bhi variable declare karte ho to uska copy milta
// Heap=> isme aapko uska refrence milta hai,jo bhi change karoge original value mai he change hoga

let name = "Ram"
let anotherName = name
anotherName = "Raja"

console.log(name) //Ram
console.log(anotherName)//Raja

let userOne={
    email: "user@google.com",
    upi: "user@upi"
}
let userTwo= userOne
console.log(userTwo.email)//user@google.com
userTwo.email="ujjwal@gmail.com"

console.log(userOne.email)//ujjwal@gmail.com
console.log(userTwo.email)//ujjwal@gmail.com