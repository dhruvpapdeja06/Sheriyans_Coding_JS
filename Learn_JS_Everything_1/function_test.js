// What's the diffenece between function declaration and functin expression in terms of hoisting

// d()

// function d(){
//     console.log("function declaration");
// }

// console.log(b);
// b();

// let b = function(){
//     console.log("function Expression")
// }

// convert this function into array function 
// function multiply(a,b){
//     return a * b;
// }

let multiply = (a,b)=>{
    return a * b ;
}

// Guess the output
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi();

// typeof ...val is array 

// Use rest parameter to accept any number of scores and return the total.

function totalScore(...val){
    let total = 0;
    val.forEach(function(val){
        total = total + val;
    });
    return total; 
}
totalScore(3,5,6,7,3,2);


//fixed the function with early return 
// function checkAge(age){
//     if(age < 18){
//     console.log("Too young");
//     }else{
//     console.log("Allowed");
//     }
// }


function checkAge(age){
    if(age < 18) return "Too young";
    return "Allowed"
}

console.log(checkAge(44));

function f(){
    return;
}

f(); // undefined

// What does it mean when we say "function are first-class citizens"?
//  Function can treat as values , can also pass a parameter

// let z = function(){

// }

// z();

// pass a function into another function 

function testing(val){
    val();
}

testing(function(){
    console.log("test function")
})

// HOF
// function return another function , accept kar parameter ek function
function aa(){
    return function(){

    }
}

[1,2,3].map(function (x) {
    return x *2 
});

// convert the impure function into pure function
let total = 0;
function addToTotal(num){
    let newTotal = total;
    newTotal += num;
}

function outer(){
    let count = 0;
    return function (){
        count ++; 
        console.log(count);
    }
}

const counter = outer();
counter();
counter();

// convert this normal funciton to IIFE
(function Infinity(){
    console.log("Initailaized");
})();

// real-world use case --want to create an private vairable
let shery = (function (){
    let score = 0;
    return {
        getScore: function (){
            console.log(score);
        },
        setScore: function (val){
            score = val;
        },
    };
})();


// Practise session 

// BMI Calculator
function bMI(height,weight){
    return height / (weight * weight);
}

console.log(bMI(59,1.5).toFixed(2));

// Create a reusuable discount calculator(HOF)
function disocuntCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    };
}

let discounter = disocuntCalculator(10);
console.log(discounter(200));

function counter1(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

// c ka apna count -- counter ki ek copy 
let c = counter1()
console.log(c());
console.log(c());
console.log(c());


// here new copy of counter
let d = counter1();
console.log(d());

//  Create a pure function to transform a value
function double(val){
    return val*2;
}

console.log(double(5));

// Use IIFE to transform varaibles
(function(){
    let password = "secret";
    console.log(password);
})();

// console.log(password); can't access outside 

//  arrow vs regular function 
// JS old versio function keyword exists in new keyword arrow exists

// When create object that time not create arrow function , this keyword value loose 


// this keyword

// closeer vs HOF 
// closer use var parent function 