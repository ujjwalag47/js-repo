//contructor mai sigleton rahta hai
//variables mai singleton nahi rahta 
//object.create //aise constructor mai use hota hai

//object literals
const sym=Symbol("key1")
const user={
    name: "Ujjwal",  //name ko "" mai nahi rakha hai system apne app ise string maan leta hai
    "fullName":'Ujjwal Ag',
    age: 20,
    [sym]:"mkey1", //agr [] nahi lagayenge to string ki trah treat hoga
    location: "Delhi",
    email: "ujjwal@mail.com",
    isLoggedin: true,
    lastLogged: ["Monday","Friday"]
}

// console.log(user.email) //ujjwal@mail.com
// console.log(user["email"]) //ujjwal@mail.com
// console.log(user.fullName) //Ujjwal Ag
// console.log(user["fullName"]) //Ujjwal Ag

//console.log(user[sym]) //mkey1  syntax for symbol access

user.email="ujjwal@google.com"
//Object.freeze(user) //used for lock so that no one can chnage the value
//user.email="ujjwal@micro.com"
//console.log(user["email"]) //ujjwal@google.com
//console.log(user)

user.greeting=function(){
    console.log("hello js user")
}
// console.log(user.greeting) // output [Function (anonymous)]
// console.log(user.greeting()) //hello js user  undefined
user.greeting() //by calling this it will remove undefined from output

user.greetingTwo=function(){
    console.log(`hello js user ${this.name}`)
}
console.log(user.greetingTwo()) //hello js user Ujjwal undefined