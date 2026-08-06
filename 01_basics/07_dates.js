let my_date=new Date()
// console.log(my_date) //2026-08-06T13:49:23.386Z
// console.log(my_date.toString()) //Thu Aug 06 2026 13:53:27 GMT+0000 (Coordinated Universal Time)
// console.log(my_date.toDateString()) //Thu Aug 06 2026
// console.log(my_date.toISOString())  //2026-08-06T13:53:27.042Z
// console.log(my_date.toJSON()) //2026-08-06T13:53:27.042Z
// console.log(my_date.toLocaleDateString())  //8/6/2026
// console.log(my_date.toLocaleString())  //8/6/2026, 1:53:27 PM
// console.log(my_date.toLocaleTimeString())  //1:53:27 PM
// console.log(typeof my_date) //object

let createDate=new Date(2005,8,27)
createDate=new Date(2005,8,27,11,50) //9/27/2005, 11:50:00 AM
createDate=new Date("2005-09-27") //9/27/2005, 12:00:00 AM  
createDate=new Date("09-27-2005")  //9/27/2005, 12:00:00 AM   
// console.log(createDate.toLocaleString()) 

let myTimeStamp=Date.now()
console.log(myTimeStamp) //1786025261728 it is the mili second from 1jan 1970 to present
console.log(createDate.getTime()) //1127779200000 it is the mili second from 1 jan 1970 to 27-09-2005
console.log(Math.floor(Date.now()/1000)) //1786025474 it is now converted to seconds from mili

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1) //8
console.log(newDate.getDay()) //4

// `${newDate.getDay()} and the time `

let datee=newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(datee) //Thursday
