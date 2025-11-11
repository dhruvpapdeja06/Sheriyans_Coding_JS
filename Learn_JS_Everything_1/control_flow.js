// if else  else-if
// switch case 
// early return pattern


// In if else block you have write true or condition that can convert into true or false
//  if your write something that can't convert it then (truthy falsy ) work

if(65){
    console.log("Done")
}else{
    console.log("Not Done");
}

// If more than one condition elif 

// switch case 

// switch always accept one value and inside it we have cases
switch(1){
    case 1:
        console.log("Case1 printed");
        break;
    case 2:
        console.log("Case 2 printed");
        break;
    case 3: 
        break;
    default:
}

// eerly return pattern
function getVal(val){
    if(val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A";
}

console.log(getVal(77));

// Assignment
let score;
function getGrade(score){
    if ( score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 33 && score <= 59) return "D";
    else if (score >= 0 && score <= 32) return "Fail";
    else  return "Invalid marks"; 
}

console.log(getGrade(69));


// Rock-paper-scissors logic 

function rockPaper(user,computer){
    if (user === computer) return "Draw";
    else if(user === "rock" && computer === "hand") return "Computer Win";
    else if (user == "scissor" && computer === "rock") return "Computer Win";
    else if (user == "paper" && computer === "scissor") return "Compurter Win";
    else return "User Win";
}

console.log(rockPaper("paper", "rock"));
console.log(rockPaper("paper", "scissor"));

// confusion 
// swich-case --> Fallthorugh if not break all case run


//  Loops -- (Repetition of thing) -->  any Application we use it's possible because of loop
// for , while , do-while, forin , forof, foreach
// when to use which loop to use , when you solve lots of use cases that help which sceneario which can use

// Repition --> 1 1 1 1 1 1 1 1 1 || 1 2 3 4 5 6 7 (Print word is repeat and value is differnt ) Abstract --values

// From where do we have to go ,How far do we have to go,, how do we have to go --for loop

// 1 to 50 -- clearity

for(let i=1; i<=10; i++){
    console.log(i);
}

// From where do we have to go , Where we have to stop ,how do we have to go 
// while --> 1 - when i say hello then stop , i don't know when stop -- no clarity

let start = 1
while(start <= 32){
    console.log(start);
    start ++;
    if(start === 18){
        break;
    }
}

// do-while
let i = 12;
do{
    console.log(i);
    i++
}
while(start<2)

// break and continue

for(i=1 ; i<5; i++){
    if( i === 3){
        continue;
    }
    console.log(i);
}