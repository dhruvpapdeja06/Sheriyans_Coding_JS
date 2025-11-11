// Data Types in JS + Type System 

// 1. Primitive --> copy the value (Ek real copy mil jaye)--> No brackets
// int, boolean , string , null , undefined ,symbol,bigint

// 2. Non -Primitive(Reference) --> Don't copy the values (Not get the real copy of the value but get the referece of parent)--> brackets
//  array , objects, functions

// Like gender fall in M,F,O same like date fall in one of them

let a = 12; 
let b = a;

console.log(a); // like name = ankit mother is Ankita
console.log(b); // here name = ankit but mother is Anjali

a = a+2;
console.log(a);

let arr = [10,12,13]; //My value is now value also
let no = arr;

arr.pop()

console.log(arr);
console.log(no);

// String
// ' ' --> single quotes
// " " --> double quotes
//  ` ` --> backticks  -- There 3 ways to create an string we wrap up on one of them

// Number
// 12,22.00, 23.41,0.44

// Boolean 
// true , false

// null --> intentially you don't give the value in future we know the value;
var selected_student_1 = null;

// undefined --> At declartion of the variable we get the value that's is undefined
// By default value get from the JS engine

// symbol --> unique immutable(not changeable) value --exaple i give you one remote you didn't see it and put it on the table 
//  and your main work is that you create power button for remotes that's color is red you pasted on my remote but some happen to my remote and it show an error 
//  i troubleshoot with mannual and get to reset by orange button but i didn't get the red button in my remote.

// In future we can use some libaraires , in which we have some fields and we create some similar fields to it and my fields change the 
//  orginial field of that library fields

let ai = {
    uid: 1,
    model: "gemini"
}

// ai.uid = 2; here by mistake change it in origional

// let u1 = Symbol("uid");
// let u2 = Symbol("uid");

// u1 === u2  unique 

let obj = {
    uid: 2,
    name: "Harsh",
    age: 12,
    email: "test@gmail.com"
};

let u3 = Symbol("uid");
// Here you can saw that obj uid is not change one unique id is added to it 
obj[u3] = "001";

// Number.Max_Safer_Interger

// BigInt
let num = 9007199254740991n;

// Reference Type

let t = [1,2,4,5];
let s = t;

console.log(t);
console.log(s);

s.pop();
console.log(t,s)

// object

let test = {
    name: "Ankit"
}

let d = test;
console.log(d);

test.name = "Mahajan";
console.log(d);

// Dynamic Type  --> In Js is not static type , dynamically type we can change the value 
//  In variable we can put any type of data is same variable , on the go and on the fly


// type of quirks(example -- typeof )

// type coercion --> Cocept one type automatically convert into another type

let z = "4" + 4; // reason why num int stirng , if one of the operand is string then other one convert it 
console.log(z); // + can do add, concat

let c = "4" - 4;
console.log(c);

// Truthy vs falsy values
// In JS every value like 0 false "" null undefined NaN document.all --> false
// !!0

// JS check the nature of that value
if(-1){
    // Remiaing all the value is true
    console.log("hy")
}


// Common Confusion
// Why NAN is a Number. typeof NaN === 'number; --> true
// When JS consider as failed numberical mathemaical  operation treat  it  harsh * 2 possible not


// undefined vs null
let x;
console.log(x);

let y = null; // This value is provided by us, for atm machine user is null when you swipe it 
console.log(y);
// happen because JS by default assign is undefinced 

