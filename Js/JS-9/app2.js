// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("parah was clicked");
// });


// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function() {
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup",function(event) {
//     console.log(event.code); // arrow up down right left

//     if(event.code == "KeyU"){
//         console.log("character moves forward");
//     }
//     if(event.code == "KeyD"){
//         console.log("character moves backward");
//     }
//     if(event.code == "KeyL"){
//         console.log("character moves Left");
//     }
//     if(event.code == "KeyR"){
//         console.log("character moves Right");
//     }

// });

let form = document.querySelector("form");

form.addEventListener("submit",function(event) {
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    // console.dir(inp);
    // console.log(inp.value);

    console.log(user.value);
    console.log(pass.value);
});
