// I can understand the JS from the tutorial but when i write code myself not able to write it. --> Is that you say everytime
// This can help you to solve that problem --> JS become Developer

// DOM --> Document Object Model -- Everything is Node -- > Everything in website we see is part of DOM --> Topic is DOM Manipulation 
//          html (Node)
//      head        body 
//   title(node)  div(node)  img(node)
//  (Tree Structure format)

// download something from the website is dom manuplualton --> txt install in 10sec , --> changes in website
// Boy Coy Website --example of DOM manupulation 

// Basics knowledge of HTML
// HTML sa element select karna , text badlna, , html change karna, Attribute , CSS change, Event listener, some sense

let id1 = document.getElementById("id1");
console.log(id1); // sometimes it will look like it likes h1 as tag then use console.dir(id1) --opening format 

let class1 = document.getElementsByClassName("class1"); // output as array jaise sturcutre
console.dir(class1); //Elements here becuase more than one have same class name

// These all the above is in legacycode

// let a = document.querySelector("h1") // first h1 tag select only
// console.log(a);

let b = document.querySelectorAll("h2"); // Give the nodelist like array
// console.log(b);

// Manipulation Start here 

// first in text
// let h1 = document.querySelector("h1");
// h1.textContent = "Learn JS With Me"; //innerHTMl , inerText

//innerHTML 
// h1.innerHTML = "<i>Hey</i>"; // Html tag dalna jab content me
// h1.hidden = true;

// Attribute manipulatio 
// src, hrefs, 
let at = document.querySelector("a");
console.dir(at); // not give href then local address give to it 
at.href = "https://www.google.com" // one way to change it 

// setAttribute and getAttribute
at.setAttribute("href","https:/www.google.com");

// Don't remember anything -- howt to set an Attribute with js

// let img = document.querySelector("img");
// img.setAttribute("src",
    // "data:image/webp;base64,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"
// )

// getAttribute
let a = document.querySelector("a");
console.log(a.getAttribute('href'));

a.removeAttribute('href')

// Dynamic DOM Manipulation
// createElement --> There is no h3
let h3 = document.createElement("h3")
h3.textContent = "Dynamic "
console.log(h3);

// prepend --> before script , append --> After script
// document.body.prepend("h3");
document.querySelector("body").prepend(h3);
// document.body.append("h3");

// basic skill --> google baba and ai to learn more thing by own.

// remove an Tag
// h1.remove();

let h1 = document.createElement("h1");
h1.textContent = "Hey I am coming";
document.querySelector("div").appendChild(h1);

// New Section start here
// From JS chane the CSS
h1.style.backgroundColor = "red";
h1.style.fontFamily = "Gilroy"

let h2 = document.querySelector("h2");
h2.classList.add("test");
h2.classList.remove("test");
h2.classList.toggle("test"); // Nhi ha to laga do 

// Practise Questions

// What is the DOM? How does it represent the HTML Structure.
// Name of the types of Nodes in the DOM tree --> 
// Element Node vs Text Node 
//  <p> element Node(Acutal ELement Tag) , may have childern ,  ,  text Node -- content

// getElementById vs querySelector --> in Id tag we can select using id only , by querySelector by using tag,id,attribute operation,class name
//  #,. in querySelector

// getElementsByClassName -- return Is it array --> HTMLCollection not array in general 

// Use querySelectorAll to select all the buttons with class: buy-now
let buynow = document.querySelectorAll(".buy-now");
console.log(buynow);

// Select the heading of a page by ID and change its text to "Welcome to Sheryians"
let h4 = document.querySelector("#intro");
h4.textContent = "Give you Information";

// Select all <li> elements and print their text using a loop 

// let li = document.querySelectorAll("li");
// li.forEach(function (val){
//     console.log(val.textContent);
// });

// for(let i=0; i<li.length; i++){
//     console.log(li[i].textContent);
// }

// innerText , textContent 
//  h1.textContent = "<p> hi </P>" --> As it's print

// When should you use textContent (fast , new way , hidden) , innerText --slow , visible content

// select a paragraph and change there content 
// let p = document.querySelector("p");
// p.textContent = "Tata Bye Bye";
// console.log(p);
// document.querySelector("body").append(p);

// How do you get the src of an image  using JavaScript
let img = document.querySelector("img");
// console.log(img.getAttribute("src"));
// img.src 


// Select a link and update its href to point to shreiyans.com
a.href = "https:/www.sheriyans.com"


// Add a title attribute to div tag
// <div title="dev"> Add title Attribute</div>
// let div = document.querySelector("div");
// div.setAttribute("title", "some info");

// Remove the disabled attribute from a button --> button.removeAttribute("disabled");
// document.querySelector("button");
// btn.removeAttribute("disabled")


// What does createElement () do? What's returned -- Node

// appendChile vs prepend

// Can you remove an element using removeChild
// document.querySelector("div").removeChild(elementNode)

// append li in ul
let ul = document.querySelector("ul");
// let l = document.createElement("li");
// l.textContent = "new task";
// ul.appendChild(l);

// Create a new image element with a placeholder source and add it at the top of a div.
let image = document.createElement("img");
// image.setAttribute("src",);
// img.classList.add("placeholder");
// document.querySelector("div").prepend(img)

// ul.removeChild(l);

// How do you change the background color of an element?
h1.style.backgroundColor = "yellow";

// Add a highlight class to every even item in a list

let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach( function (ele) {
    ele.classList.add("highlight");
});

// Toggle a class active on a button when clicked --use classList.toogle()


// Set the font size of all <p> elements to 18px
// let p = document.querySelectorAll("p");
// p.forEach(function (ele){
//     Element.style.fontSize = "18px";
// });

// classList (prefered way ) more than property we can change it vs styleproperty p.style.color  (css property change by 2 way)
