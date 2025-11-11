// Objects  --> partical entity like sheriyans founder harsh
// Array -->Al cities of dogs, or harsh 


// data store in key - value sturcture
let obj = {
    name: "harsh",
    age : 26,
    city : "Bhopal"
};

obj.age
obj['age'];

// why both method availabe . --> literally aa ko dhundna 
let aa = "name";

// obj ka andar aa name ki key dekho
obj.aa

// here aa convert into  obj
obj['aa'];

// Nesting and deep access
const user = {
    name : "Arjun",
    age : 28,
    Adress : {
        city : "Bhopal",
        pin : 250111,
        Location : {
            lat : 23.4,
            lng : 77.4,
        },
    },
};

//access lat --> You have to access it again and again 

let{lat,lng} = user.Adress.Location;
console.log(lat,lng);

// for in loop 
for(let key in obj){
    console.log(key,obj[key]);
}

// Object.keys(obj); give the keys of array 

// Object.entries(obj) it stores there keys and vales as an array of pairs ( arrays of arrays)

let obj2 = {...obj};

// Object.assign({}, obj);  same as spread operator

let assign = Object.assign({price : 299}, obj);
console.log(assign);

// deep cloning
console.log(user);

// nested obj ma jab spread operator sa copy karta ha then only top value real copy , nested obj ka andar reference passs karna lagta ha

let user2 = {...user};
console.log(user2);
user2.Adress.city = "Indore";

//string karna sa copy hokar ata ha reference bankar nhi ata 
let user3 = JSON.parse(JSON.stringify(user2));
console.log(user2);
// console.log(user3);
user3.Adress.city = "Delhi";

// Option chainning 
// user1?.addres?.city // khi par backend da session aa bhi sakta nhi bhi that we can use

// computed properties
let role = "admin";
let test = {
    name: "Ajay",
    city : "Noida",
    [role] : "Harsh"
}

// Practise Questions

// Create an object for a student with name, age, and isEnrolled.
let student = {
    name: "Govind",
    age : 26,
    isEnrolled : true
}

// Can an obj key be an number or boolean ? Try this
let a = {
    1 : 11,
    true: "hi",
    "f-name": "Uday",
    age : 22
}

console.log(a.true);

console.log(a['f-name']);

// Given a dynamic key let key = "age", how will you access user[key]
let key = "age"

console.log(a[key]);

// if coordinates not present how to prevent error 
// using option chainning

let {city} = user3.Adress;
let {latitude} = user3.Adress.Location;
console.log(city,latitude);

// Destructure the key "first-name" as a variable called firstName.

let employee = {
    "first-name" : "Aditya"
}

// property bhar nikal kar variable : ka baad bar rakhna
let {"first-name": firstN} = employee;

// Use for-in to log all keys in the object
for (let key in user3){
    console.log(key);
}

console.log(Object.entries(user3));

Object.entries(user3).forEach((val) =>{
    console.log(val[0] + ": " + val[1]);
});


// What's the problem with this question

const detail = {
    info: {
        score : 80
    }
}

const clone = {...detail};
clone.info.score = 100 

// Deep clone the detail safely

let newobj = JSON.parse(JSON.stringify(detail));
newobj.info.score = 77;
console.log(newobj
)

// Rewrite this safely using optional chaining;
const pp = {};
console.log(typeof pp);
// console.log(pp.profile.name); error

// pp?.profile?.name 

