//filter method in array

const coding = ["js", "ruby", "java", "python", "cpp"]
const values=coding.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(values) //undefined


//filter
const nums=[1,2,3,4,5,6,7,8,9,10]
//const num=nums.filter((i)=> (i>4))  // same he tareeka hai implicit return
const num=nums.filter((i) => { // explicit return
    return i>4
})
//console.log(num) //[ 5, 6, 7, 8, 9, 10 ]

// for each loop ka use karke bina filter ke madad
const newNums=[]
nums.forEach((i)=>{
    if(i>4){
        newNums.push(i)
    }
})
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbooks=books.filter((bk) => bk.genre==="History")
//console.log(userbooks)  //{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },...
let bookafter=books.filter((i) => {
    return i.publish>1995 && i.genre==="History"
})
console.log(bookafter) //{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }