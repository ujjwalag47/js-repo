// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){ //function name nahi likhte
    //console.log(val) //prints all values OF ARRAY
})

coding.forEach((item) =>{ //using arrow function
    //console.log(item) ////prints all values OF ARRAY
})

function printme(item){
    // console.log(item)
}
// coding.forEach(printme) //by using function name it will print all values of array

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr) //js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    //console.log(item) //{ languageName: 'javascript', languageFileName: 'js' }....
    console.log(item.languageName) //javascript java python 
})