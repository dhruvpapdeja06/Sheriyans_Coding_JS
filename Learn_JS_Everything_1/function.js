// functions --> provides modularity to our code.
// cleaner our code and most imp part

// I want that i don't run my code immediately when someone click button then that code run

// What , why , how
// Code likhe par code chal jata ha don't control of it, In future when i want then run

//  I can run that function whatever time i want

// funtion name start with keyword,no and special characters

// function statement/declaration
function greet(){
    console.log("hy! Welcome to our Website");
}

greet();


// Other way to create a function --> Array function

// function expression
let meet = function(){
    console.log("This is function expression")
}

meet();

// fat array function
let arrrow = () => {
    console.log("Arrow function")
}

arrrow();

// Hardcoded function 
function dance(value){
    console.log(` ${value} is dancing`);
}
dance("Cheetah");
dance("Horse");


// addition --> here v1,v2 paramenters
function add(v1,v2){
    console.log(v1 + v2); // NaN --> not possible to add undefinced
    console.log(v1,v2);  // undefined 
}
add(4,6); // 4,6 are arguments 
add(44,0.22);
add();
// default,rest,spread 

// by default value is 0 , if value passed by user that passed in it
function mul(a=0,b=0){
    console.log(a*b);
}
mul(1,5);

// rest -- when too many arguments pass in function then we use ... 
// rest vs spread --> if it used in function  parameter space then it's rest if is use in array and objects then spread
function abcd(a,b,c,...val){
    console.log(a,b,c,val);
}
abcd(3,6,3,3,6);


//  return vs early return 
// return -- Jha sa aya ha vhi daal dungi

let val = add(5,4);
console.log(val);

// FIrst class function --> It exists in JS those function which can treat as value and pass in the function as a parameter
// function value ki tarah use ho sakta ha
function test(val){
    val();
}
test(function(){
    console.log("hey");
})

// High Order funtion --> That return a function or accept a fucntion in there parameters

// function a(val){

// }
// a(function(){

// })


function a(){
    return function(){
        console.log("hy")
    }
}

a()()

// pure vs impure functions

// Those function that does not change the global variable  value , those change the value impure

let tt = 66;
function aa(){
    console.log("Pure function")
}

aa();

// Impure function
// let zz(){
//     tt++;
// }

// zz();

// Closures --> One function that return another function , return hone wala function always use parent function variable

function q(){
    let h = 33;
    return function(){
        console.log(a);
    }
}

// lexical scoping
function bb(){
    let a = 13;
    function cc(){
        let b = 44;
        function dd(){
            let c = 99;
        }
    }
}

// a variable can be access in bb function like b can access in cc , unki physical ka scope kya ha 

// IVE --> Immediately invoke fucntion expression
(function(){
    console.log("aa");
})();

// Hoisting -- Not work in function expression , function statement ma work that is hoist


hey();


function hey(){
    console.log("heyyyy");
}

