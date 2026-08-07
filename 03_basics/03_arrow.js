const user={
    username: "ujjwal",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
        //console.log(this) //{
                            //   username: 'ujjwal',
                            //   price: 999,
                            //   welcomeMessage: [Function: welcomeMessage]}
    }
}
user.welcomeMessage() //ujjwal,welcome to the website
user.username="sam"
// user.welcomeMessage() //sam,welcome to the website
//console.log(this) //{}

// function chai(){
//     let username="ujjwal"
//     console.log(this) // bahut saari chiiz aaayegi property type
//     console.log(this.username) //output undefined,kyuki sirf object mai he aise access hota na ki function mai
// }
//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

const chai= () => {
    let username="ujjwal"
    console.log(this) // output {}
    console.log(this.username) //undefined
}
chai() 

//*************arrow function ***********************************

// const addTwo=(num1,num2) =>{
//     return num1+num2 //explicit return
// }
// console.log(addTwo(3,5)) //8
 
//ek aur tareeka arrow function ka use karne ka
// const addTwo=(num1,num2) => num1+num2 //8
const addTwo=(num1,num2) => (num1+num2) //ye tareeka react mai bahut kaam aayega //implicit return
console.log(addTwo(3,5))//8

const objuse = (num1, num2) => ({username: "hitesh"}) //isme ye object return kara hai {} object mai use hote hai
console.log(objuse(3, 4)) //{ username: 'hitesh' }

// const myArray = [2, 5, 3, 7, 8]
//array mai bhi arrow function use karenge aage
// myArray.forEach()