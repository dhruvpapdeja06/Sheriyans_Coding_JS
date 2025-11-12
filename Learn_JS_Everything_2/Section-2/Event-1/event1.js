// Event -- when i click mouse anywhere in screen is something happen no 
// EventListener --> After clicking on the screen something happen like color change

// In Browser do scrolling,clicking ,double click event will be raise.
// Screen par kuch ho (enent -- kuch action hua ) uska reaction ho (event listner)


// select the element first then addeventlistner like click,hover ,change color
// let h1 = document.querySelector("h1");
// h1.addEventListener("click" , function(){ // eventLister (event, fucntion)
//     h1.style.color = "Red";
// });


// let p = document.querySelector("p");
// function dbclick(){
//     p.style.color = "green";
// };


// p.addEventListener("dblclick", dbclick); 
// // Remove eventListener
// p.removeEventListener("dblclick", dbclick);

// Interesting , Ai --> I am confused how many event are in Js , I want to know all the name whatever present in daily basis.
// Everytime i type in the input which event trigger and when mouse come hover the div, when somebody type on the keyword on the whole screen not anywhere specific , not input specific just on the website.

// let input = document.querySelector("input");
// Jo bhi character mene type vo console par print ho jaye
// input.addEventListener("input", function(dets){
//     // console.log("typed"); kuch add kara ya delete hara that is input
//     if (dets.data !== null){
//         console.log(dets.data); //how to make it dynamic 
//     }    
// });

// change -- That event execute when input,select or textarea something change
// let sel = document.querySelector("select");
// sel.addEventListener("change",function(dets){
//     // console.log(dets.target.value); //select karna vo milega so value ma likha hoga 
//     device.textContent =   `${dets.target.value} Device selected`;
// });


// approach --> write on the screen that is window(listener)

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",function(dets){
//     if( dets.key === " "){
//         h1.textContent = "SPC";    
//     }else{
//     h1.textContent = dets.key;
//     }
// });

// Upload file by my custom way
// let btn = document.querySelector("#btn");
// let input = document.querySelector("#fileinp");
// btn.addEventListener("click", function(){
//     input.click();
// });

// input.addEventListener("change", function(dets){
//     // console.log(dets.target.files[0].name);
//     const file = dets.target.files[0];
//     if(file){
//     btn.textContent = file.names;
//     }
// });

// 