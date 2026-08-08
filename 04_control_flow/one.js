// if
const isUserloggedIn = true
// <, >, <=, >=, ==, !=,
//=== strict equal ye data type nhi check karta hai
//!== Strict Not Equal 
// console.log(5 !== "5"); //true

const temperature = 41
// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //give error due to scope if mai define hai

const balance = 1000
// if (balance > 500) console.log("test"),  //implicit scope
// console.log("test2");  // test test2  but comma laga kar likhna good practice nahi hai
if(balance<500){
    console.log("balance less than 500")
}
else if(balance<750) console.log("balance less than 750")
else if(balance<900){
    console.log("balance less than 900")
}
else{
    console.log("balance less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}