const tinderuser=new Object() // ye singleton object hai
// const tinderuser={} // ye non-singleton object hai
// console.log(tinderuser) //{} both will give same output

tinderuser.id="123ac"
tinderuser.name="ujjwal"
tinderuser.isloggedin=true
//console.log(tinderuser) //{ id: '123ac', name: 'ujjwal', isloggedin: true }
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
//console.log(Object.entries(tinderuser)) //[ [ 'id', '123ac' ], [ 'name', 'ujjwal' ], [ 'isloggedin', true ] ]\
// console.log(tinderuser.hasOwnProperty("isloggedin")) //true
// console.log(tinderuser.hasOwnProperty("loggedin")) //flase


//singleton object  

regularuser={
    email: "some@gmail.com",
    fulllname :{
        userfullname:{
            firstname:"ujjwal",
            lastname:"agrawal"
        },
        nickname:"ujjwalag"
    },
    location:"delhi"
}
//console.log(regularuser.fulllname.userfullname.firstname) //ujjwal

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}
//const obj4={obj1,obj2} // is se object ke andar 2 object milenge { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj4=Object.assign({},obj1,obj2,obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//{}, iske bina bhi likhenge tabh bhi koi dikkkat nahi hogi pr ye achi practice hai jimse ek empty object mai baaki aa jayenge
const obj4={...obj1,...obj2,...obj3} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//console.log(obj4)


const users = [
    {
        id: 1,
        email: "ch@gmail.com"
    },
    {
        id: 2,
        email: "ah@gmail.com"
    },
    {
        id: 3,
        email: "bh@gmail.com"
    },
]
// console.log(users[2].email) //bh@gmail.com

//+++++++++++++++++++++++++++++++++++++ object destructure **********************************************************

const course={
    coursenamne:"js",
    price:"999",
    teacher:"code"
}
//course.price

// const {coursenamne}=course // . ka bhi use kar sakte the but ye is liye kiya taaki baar baar access kare to bada bada na likhna pade
// console.log(coursenamne) //js
const {coursenamne: name}=course //agr koi chota naam dena ho
console.log(name) //js

//api ny json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//ye format hota hai api vgrh ka

// [
//     {},
//     {},
//     {}
// ]