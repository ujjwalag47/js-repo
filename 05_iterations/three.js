// for of loop

// ["", "", ""]
// [{}, {}, {}]

let arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num) //prints all values in array
}
let greetings="Hello World"
// for(const i of greetings) console.log(`Each char is ${i}`) //Each char is H prints space also

//Maps

const mp=new Map();
mp.set("IN","India")
mp.set("USA","Unites States of America")
mp.set('FR',"France")
mp.set('IN','India') //only takes unique 
// console.log(mp) //'IN' => 'India',
for(const [key,value] of mp){   //if want both values simply write key instead of [key,value]
    console.log(key ,':-',value) //IN :- India
}

const obj={
    game1:"NFS",
    game2:"SpiderMan"
}
for(const [key,value] of obj){ //object ke liye ye method nahi
    //console.log(key,':-',value) //TypeError: obj is not iterable 
}