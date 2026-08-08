// map    → "Mujhe har item ko modify karna hai"
// filter → "Mujhe kuch items ko choose karna hai"

//map method in array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newN=myNumers.map((num) => {return num+10})  //
//console.log(newN)

// using for rach
const nums=[]
myNumers.forEach((num) => {
    num=num+10
    nums.push(num)
})
// console.log(nums) //11, 12, 13, 14, 15, 16, 17, 18, 19, 20


//chaining,combination of map and filter
const newNums=myNumers.map((i)=> i*10).map((i) =>i+1)
.filter((i) => i>=40)
console.log(newNums) //41, 51,  61, 71, 81, 91, 101