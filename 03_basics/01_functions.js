function myname(){
    console.log("U");
    console.log("J")
    console.log("J")
    console.log("W")
    console.log("A")
    console.log("L")
}
myname// it is just a refrence
// myname() // it is calling the function

// function add(num1,num2){
//     console.log(num1+num2)
// }
// add() //output NaN
// add(3,"4") //34
// add(3,"s") //3s
// add(3,null) //3
//function ke andar parameters hote hai aur jab call mai diye jaate hai vo hai arguments
//const result=add(3,4)
// console.log(result) // output undefined bcz return nahi kiya hai function ne only print

function add(num1,num2){
    // let result= num1+num2
    // return result
    return num1+num2
    console.log("not") //this line will not print as written after return statement
}
const res=add(3,4)
// console.log("Result", res) //7


// function loginUsermessage(username){
//     if(username===undefined){  //(!username)
//         console.log("please enter name")
//         return
//     }
//     return `${username} just logged in`
// }
loginUsermessage("ujjwal") // this will only call the function not print
// console.log(loginUsermessage("ujjwal")) //ujjwal just logged in
//console.log(loginUsermessage()) //please enter name undefined

function loginUsermessage(username="sam"){ //defalut value is sam if value is not passed so if will never run
    if(username===undefined){  //(!username)
        console.log("please enter name")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUsermessage()) //sam just logged in

function calculateCartPrice(val1,val2,...num1){  //... yaha pr ye spread operator hai jo ki baaki jitne bhi values bachi hai unka array bana de
    return num1
}
console.log(calculateCartPrice(200,120,546,452,800)) //[ 546, 452, 800 ] kyuki sirf num1 he return karaya

//object passing in function
const user = {
    username: "ujjwal",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Username is ujjwal and price is 199
handleObject({
    username: "raja",    //Username is raja and price is 1
    price: 1
})

//array pass in function
const narray=[200,400,100,600]
function handlearray(anyarray){
    return anyarray[1]
    // console.log(`second value of array is ${anyarray[2]}`)
}
//handlearray(narray) // second value of array is 100
console.log(handlearray([500,250,653])) //250