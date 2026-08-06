//arrays are resizable
// here arrays can contain multiple data types like string num,bool in one array only
// shallow copy banti hai jiska mtlb arrays original jagh vali refrence pr he chnage hota hai

const arr=[1,2,3,4,5]
const hero=["Ram","Raja"]
const arr2= new Array(1,3,5,"Raja")
console.log(hero[1])

// Array methods

// arr.push(6)
// arr.push(7)
// arr.pop()
// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]

arr.unshift(9)
console.log(arr) //[ 9, 1, 2, 3, 4, 5 ]
arr.shift()
console.log(arr) //[ 1, 2, 3, 4, 5 ]

// console.log(arr.includes(9)) //false
// console.log(arr.indexOf(9)) //-1

const newArray=arr.join()// it converts into string you can check by using typeof also
console.log(newArray) //1,2,3,4,5

// slice, splice **
//slice original array ko manipulate nahi karta aur splice original array ko manipulate karta hai
console.log('A',arr) //A [ 1, 2, 3, 4, 5 ]
const my=arr.slice(1,3) 
console.log(my) //[ 2, 3 ]
console.log("B",arr) //B [ 1, 2, 3, 4, 5 ]

const my2=arr.splice(1,3)
console.log(my2) //[ 2, 3, 4 ]
console.log("C",arr) //C [ 1, 5 ]
