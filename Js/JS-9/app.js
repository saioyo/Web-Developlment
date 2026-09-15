// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function(){
// //     alert("button was clicked");
// // }

// // btn.onmouseenter = function(){
// //     console.log("you entered a button");
// // }

// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(){
//     console.log("you double click");
// });

document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector("button");
    if (!btn) return;

    btn.addEventListener("click", function(){
        let h3 = document.querySelector("h3");
        if (!h3) return;

        let randomcolor = getRandomColor();
        h3.innerText = randomcolor;
        h3.style.color = randomcolor;

        console.log("color updated");
    });
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}