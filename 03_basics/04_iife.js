// Immediately Invoked Function Expressions (IIFE)
//Global scope pollute karta hai to hum isliye iife ka use karte hai
//bahut jaldi call karne ke liye aur baaki code ko bhi farak na pade
// ()();
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); //DB CONNECTED
})(); // ; isliye lagaya jaata hai jis se end ho jaye aur doosra run kar sake

((name) => { //unnamed iife
    console.log(`db 2 connected ${name}`) //db 2 connected ujjwal
})("ujjwal")

// How does javascript execute code + call stack video notes of video in ms word
//https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25