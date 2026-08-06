const name ="ujjwal"
const repoCount=50
console.log(name+repoCount+"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('Ujjwal-ag-garg')
console.log(gameName[2]) //j
console.log(gameName.__proto__) //output {}

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("w"))
const newString=gameName.substring(0,6)//starting index(cant be negative),no of strings
console.log(newString) //ujjwal last(6) is not included 

const anotherString=gameName.slice(-7,7)
console.log(anotherString)

const newStringOne="    ujjwal   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https//ujjwal.com/ujjwal%20"
console.log(url.replace('%20','-'))
console.log(url.includes('ujja')) //false
console.log(gameName.split('-')) //[ 'Ujjwal', 'ag', 'garg' ]