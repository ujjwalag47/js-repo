var c=30
if(true){
    let a=100
    const b=200
    var c=300 //if only we write c=300 then also it will print
    console.log("inner a:",a)
}
// console.log(a) //give error
// console.log(b) //give error
console.log(c) //300

//* windows mai global scope alg hai jab hum console mai dekhte hai aur node mai alg hai

function one(){
    const username="ujjwal"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) // gives error as cannot be accessed outside
    two() //ujjwal
}
one() //agr ye nahi likhenge to kabhi two bhi execute nahi hoga

if(true){
    const username="ujjwal"
    if(username==="ujjwal"){
        const website=" yt"
        console.log(username+website); //ujjwal yt
    }
    //console.log(website) //error
}
// console.log(username) //error

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) //6

function addone(num){
    return num + 1
}

addTwo(5) // output error,is vale function initiliazation mai access nahi kar sakte na he print **
const addTwo = function(num){
    return num + 2
}