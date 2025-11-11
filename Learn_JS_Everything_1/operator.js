// Operator --> special keyword or symbols to perform operatiorn on some value
// Mathematical or equation perform  --> Every operator has use case

// Arithmetic Operator --> +,-,*,/,%,**

// Comparision & Assignment--> = ,==, ===, >= , <=, != , !== , < , > 
// = Assign a value to the variable
// == , != not strict 
//  === , !== strict 


let a = 12;
a += 2;
console.log(a);
a -= 11;
console.log(a);
a *= 9;
console.log(a);
a /= 3;
console.log(a);
a %= 3;
console.log(a);

// Logical Operator
// && , || 

// AND and OR , !(false) 

// unary operator 
// +, - , ! , typeof , ++ , --

//  +"12" --> convert into no 12
//  + "hy" --> not convert into no NaN, -5
// !12 inverted type

let b = 77;
b++;
console.log(b);

// ternary operator --> ?:
5 > 2 ?console.log("Yes"):console.log("False");

// typeof , instanceof 
// typeof nulll is incorrect and array 

let arr = [];
typeof arr ;

//  instanceof always work on referece value , type of primitve value

// confusion question 
let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
}else {
    console.log("B");
}

// 2nd 
let isAdmin = true;
let isLoggedIn = false;
if ( isAdmin || isLoggedIn){
    console.log("Access Granted");
}else {
    console.log("Access denied");
}

// 3rd
let temp = 35;
if( !(temp < 30 )){
    console.log("Hot");
}else {
    console.log("Pleasant");
}

let z = 0;
if (z){
    console.log("Truthy");
}else {
    console.log("Falsy");
}

let score = 78;
let grade = score >= 90? "A" : score >= 80 ? "B" : score>= 60 ? "C" : "Fail";
console.log(grade);

let point = 20;
let status = point >= 80 ? "Gold" : point >= 70 ? "Silver" : "Bronze";
console.log(status);

let loggedIN = true;
let hasToken = false;

let access = loggedIN && hasToken ? "Allow" : "Deny";
console.log(access);

let c = 3;
let n = c++;
console.log(c,n);

let p = 5;
let q = ++p;
console.log(p,q);

let m = 10;
console.log(m--);
console.log(m);

let u = 5;
let result = u++ + ++u;
console.log(result);

let likes = 100;

function likePost(){
    return ++likes;
}

console.log(likePost());
console.log(likes);


let count = 5;

if(count-- == count){
    console.log("Matched");
}else{
    console.log("Not Matched");
}

// !! value for truithiness 
// pre / post