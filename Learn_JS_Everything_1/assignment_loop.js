// Q1. Print numbers from 1 to 10 using a for loop.

// for(i = 1; i<=10; i++){
//     console.log(i);
// }

// Q2. Print numbers from 10 to 1 using a while loop

// let j = 10;
// while(j>=1){
//     console.log(j);
//     j--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop.
// for(i = 1; i<21; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Q4. Print odd numbers form 1 to 15 using a while loop
// let n = 1;
// while(n<=15){
//     if(n%2 === 1){
//         console.log(n);
//     }
//     n++;
// }

// Q5. Print the multiplication table of 5 
// for(i=1; i<=10; i++){
//     console.log("5" + "*" + i + "=" + 5*i);
// }

// Q6. FInd the sum of numbers from 1 to 100 using a loop.
// sum = 0;
// for(i=1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum);

// Q7. Print all the numbers between 1 to 50 that are divisible by 3.
// for(i=1; i<=50; i++){
//     if( i%3 === 0 ){
//         console.log(i);
//     }
// }

// Ask the user for a number and print whether each number 
// form 1 to that number is even or odd.
// let num = prompt("Enter a Number");
// for(let i=1; i<num; i++){
//     if(i % 2 === 0){
//         console.log(`${1} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }
// }

// Q.9 Count how many numbers between 1 and 100 are divisible by both 3 and 5.
// let count = 0;
// for(let k=1; k<=100; k++){
//     if( k % 3 === 0 && k % 5 === 0){
//         count = count + 1;
//     }
//     console.log(count);
// }

// Q.10 Stop at First Multiple of 7 , Write a loop from 1 to 100 that prints each no, stops completely when it finds the first number divisible by 7
for(let i=1; i<101; i++){
    console.log(i);
    if( i % 7 === 0){
        break;
    }
    // console.log(i);
}

// skip multiple of 3
for(let i=1; i<=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

// first 5 odd no print 1 to 100
let count = 1;
for(let i=1; i<=100; i++){
    if( i % 2 === 1 ){
        // console.log(i);
        count++;
        console.log(i);

        if(count === 5 ) break;
    }
}

// How to level up yourself 

// Prompt --> I am complete begineer in js i prefer simple english , give me some questions to solve around loop ,10 questions which are ultimate beginner friendly


