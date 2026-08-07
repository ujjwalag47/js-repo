const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros) //array ke andar array push ho jayega as a 4th element
// console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) //flash

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new=[...marvel_heros,...dc_heros]  //... ye spread operator hai multiple arr ko ek he banane mai kaam aata hai
//console.log(all_new) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array=[1,2,[6,9],5,[7,2,[1,0],5]]
// const real_another_array=another_array.flat(1) //[ 1, 2, 6, 9, 5, 7, 2, [ 1, 0 ], 5 ]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array) // [ 1, 2, 6, 9, 5, 7, 2, 1, 0 , 5 ]
 
console.log(Array.isArray("Ujjwal")) //false
console.log(Array.from("Ujjwal")) //[ 'U', 'j', 'j', 'w', 'a', 'l' ]
console.log(Array.from({name: "Ujjwal"})) //[] **

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]