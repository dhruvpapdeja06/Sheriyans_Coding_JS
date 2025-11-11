// let , var , const --> whatever lang you know before learning the JS forgotten the concept of other lang 
//  beacuse in JS concept is little bit different to other language.

//  life cycle of a program that name exits( Like building an game we have to remember the player name other info during the game )

// variable -- container(Why we need it -- In future you need that value)

var num = ((23*12-6)%45);

// not write like this it's a bug
a = 12 ;

// give variable name meaningful to easy understanding
var no = 12;

// let no = 22; 

// const no = 10;

// concept of declaration and initialization

var a ; //declare

// var a = 13;  // declare and initalize(giving the first value)

// difference between var, let and const

//  Var
// 1. when we create variable with var add inside  window
var lang = "JS";
let tech = "mern";
// 2. fucntion scope hota ha
function test(){
    if(true){
        var w = 23;
    }
}
// In other lang w variable is scope inside the if block but here fucntion  block scope


// 3. We can again declare with same name and  don't give any error

var age = 26;
var age = 27;  //want get error comes early with using the same variable name otherwise  confilct in future

//  In case of let it's thrown error
// let age = 32;

let dulha = 'lab';
let dulhan = 'laby';


// const 
const discount = 20; // value can't change with lifecycle


// Scope(global,block,functional)

var name = "Harsh"; // global scope used it all the program(Not inside in curly brasis)
// When these code run go inside one function , it js browser engine do 


function ab(){
    var fname = "Sanjeev";
    // function scope here not used in whole code  
}

// Not function here used in whole the code -- Block Scope
{
    var b = 134;
}

// for let
{
    let c = 22;
}

function cd(){
    if(true){
        let z = 1;
    }
}

// Reassignment - Allowed in case of let and var

var lname = "Sharma";
lname = "kholi";

let player = "bowler";
player = "batsman";

// Redeclaration --: only allowed in var not in let
var money = 1000;
var money = 2000;

let cash = 500;
// let cash = 100;  Not possible in case of let


// Only let and const
// Temporal Dead Zone -- That are in which JS known variable exists but don't give the value of it like 1 .. to 11
//  variable banae se phle ka space

// If print the console.log(value) with declartion ERROR - a is not defined 
// console.log(value); That before declaration we print the variable (like give the child before born)
// It' give you an error in case of let check for var
let value = 12;

// Error --> Cannot access before initailization
// code execute line by line they know before the value (like age =15 ask mercede key  but in  come in 22 age)
 
// variable  var it's gopi bhau -- hoist ho jata ha -- first value hold that is undefined  
console.log(aa);

var aa = 44; 

// Hoisting Impact 
// When we create a variable in JS that can be divided into parts and first declare part goes to up and declare part in same place(niche rha jata)

// var  n = 99; not temporal dead zone
//  like this var n = undefined; + a = 12;

//  var b = undefined; at first line 

// It happend in let and const also
// console.log(j) //temporal dead zone
let j = 88;

// var --> hoist --> undefined
// const and let --> hoist --> not value assigned


// IMP
var r = 11; //global 
//block as global -- fucntion scole
{
    var r = 22;
}
console.log(r);

// Common Confusions ?
//  Why var leaks outside block but let doesn't
if(true){
    // var not respect to if or for only respect to fucntion
    // let curly brasis respect
    var a = 1;
    let l = 2;
}
console.log(a);
// console.log(l);


// Why const allows changing object properties
const person = {
    fname : "Harsh"
};

// property updation is allowed in const
person.fname = "Sharma"; 
// person = {}; Assignment to constant variable

// Don't want to allow change the value of const --> freeze

