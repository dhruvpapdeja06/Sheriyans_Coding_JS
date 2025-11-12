// mouseover and mouseout event

let hover = document.querySelector("#hover");

// hover.addEventListener("mouseover", function(){
//     hover.style.backgroundColor = "yellow";
// });

// hover.addEventListener("mouseout", function(){
//     hover.style.backgroundColor = "red";
// });

window.addEventListener("mousemove", function(dets){
    hover.style.top = dets.clientY + "px";
    hover.style.left = dets.clientX + "px";
});
// let form = document.querySelector("form");
// form.addEventListener("submit", function(dets){
//     console.log(dets.preventDefault());
// })