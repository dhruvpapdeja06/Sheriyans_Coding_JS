// Array --> mostly used with loop --> that can hold multiple values at a time

// Array is different in other language --> like similar type of data can store

let a = [1,2,43,4,"harry", 66.66, true];

let marks = [10,20,30,40,50];

// console.log(marks[1]);

// Other way 
// let arr = new Array();

// // modify the value
// marks[2] = 44;
// console.log(marks);

// Methods in Array
let arr = [1,2,3,4,5,6];

//.push() --> method 
arr.push(444);
console.log(arr);

// end
arr.pop();
console.log(arr)

// from starting
arr.shift();
console.log(arr);

arr.unshift(3333);
console.log(arr);

// in middle some delete value --> change the acutal array
arr.splice(2,3);
console.log(arr)

// don't change in the actual array  -> o to 1 new array will be get
// make copy of the orginal array
let newArray = arr.slice(0,2)
console.log(newArray);

// reverse
console.log(arr.reverse());

// sort --> always accept a function 
arr.sort(function(a,b){
    return a-b; //asc b-a desc
})


// map, filter , reduce 
// for each --> these all accept function -- function ma ek value but also index majority time ek value use 

//map -- return in each value

// forEach
let test = [1,2,4,6,22,9];

// for every value of test array this function execute
test.forEach(function (val) {
    console.log(val + 5 );
});

// map -- jab use kana ha jab mujhe new array banana hai based on the old array
// return in must otherwise undefined each time based on the array we choose
//  when you saw any case where you have to create an new array base on the preivous array and store some of the value
let ans = test.map(function (val) {
    if (val < 10 ) return val;
});

console.log(ans);

// filter --> purane array sa kuch member new array layega
let f = test.filter( function (val){
    if ( val > 4 ) 
    return true; // true -- new array ma jayegi -- false - nhi jayegi
});

console.log(f);

// reduce -- ek array se ek value banana like sum
// accumulator 
let r = test.reduce(function (accumulator,val){
    return accumulator + val;
}, 0);

console.log(r);

let fi = test.find(function (val) {
    return val === 1 ;
});

console.log(fi);

// other expamle
let obj = [
    { id: 1 , key: 1},
    { id: 2 , key: 2},
    { id: 3 , key: 1},
]

let oo = obj.find(function (val){
    return val.key === 1 ;
})

console.log(oo);

// some  -- any value that satisfy b true 
let b = [30, 50, 70, 40, 90];
let zz = b.some(function (val){
    return val > 70;
});

console.log(zz);

let ss = b.every( function(val){
    return val  > 20 ; // if the condition satisfy all the value of array then true else false
});

console.log(ss);

// Destructuring --> same order ma main array sa value get it

let tt = [1,2,3,4,5,6];
let [p,q, ,g] = tt;

// reference pass if change in yy then change in tt
let yy = [...tt];


// Practise Question

// Create an array with 3 fruits and print the second fruit.

let fruits = ['Apple', 'Orange','Banana'];
console.log(fruits[1]);

// Add 'Mango' at the end and "Pineapple at the beginning"
fruits.push('Mango');
fruits.unshift('Pineapple');
console.log(fruits);

// Replace Banana with Kiwi
fruits.splice(3,1,'Kiwi');
console.log(fruits);

// Insert "Red" and "Blue" at index 1 in this array 
let colors = ["Green", "Yellow"];
colors.splice(1,0,"Red","Blue");
console.log(colors);

// Extract only the middle 3 elements from this array
let items = [1,2,3,4,5,6];
let item = items.slice(2,5);
console.log(item);

// sort this array Alphabetically and then reverse it 
let names = ["Zara", "Arjun","Mira","Bhavya"]
console.log(names.sort().reverse());

// use map to sqare each number
let square = items.map( function(val){
    return val*val;
});

console.log(square);

// Use filter to keep numbers greater than 10:
let numFilter = square.filter(function (val){
    return val > 10;
});

console.log(numFilter);

// use reducet to find the sum of the array 
let sum = square.reduce((accumulator,val)=>{
    return accumulator + val;
},0);

console.log(sum);

// Use .find() for the first number greater than 10
let answer = square.find((val) => {
    return val > 10;
}); 

console.log(answer);

// Desturcture this array to get the firstName and lastName

let fullName = ["Ishan", "Sharma"];
let[firstName,lastName] = fullName;
console.log(firstName,lastName);

// Merge two array with spread operator

let merge = [...square,...items];
console.log(merge);

// Add "India" to start of this array using spread;
let countries = ["USA", "Canada"];
countries = ["India",...countries];

// Clone this array properly(not by reference);
let a1 = [4,5,7,7];
let a22 = [...a1];
console.log(a22);

//Confusion 

// splice -- change in origonal array -- slice -- values get store in new array 

// map vs forEach -- > all the members go and no return , not create new array , map -- return , create new array 

//.sort --bigblunder -- num to  --> string 
items.sort(() => a - b);  //providing a compratison function



