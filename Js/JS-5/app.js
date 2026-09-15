// const student = {
//     name:"sai",
//     age:19,
//     marks:99,
// }
// let student2 = ["shradha",23,94.4];

// const item = {
//     price: 100.99,
//     discount:50,
//     colors: ["red","pink"],
// }

// const post = {
//     username:"@SaiAmbekar",
//     content:"This is my #firstPost",
//     likes: 150,
//     reposts:5,
//     tags:["@apnaCOllege","@delta"],

// }

// const classInfo = {
//     aman:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     shradh:{
//         grade:"A",
//         city:"Pune"
//     },
//     karan:{
//         grade:"O",
//         city:"Mumbai"
//     }
// // };

// const classInfo = [
//     {
//         name:"aman",
//         grade:"A+",
//         city:"Delhi"
//     },
//     {
//         name:"shradha",
//         grade:"A",
//         city:"pune"
//     },
//     {
//         name:"karan",
//         grade:"O",
//         city:"Mumbai"
//     }
// ];

// let num = Math.random();
// num *= 10;
// num = Math.floor(num);
// num = num +1;

// let number = Math.floor([Math.random()*100] +1);

// let num = Math.floor([Math.random()*5]+20);

// Guessing Game

console.log("Welcome to Jumanjii");

let max = prompt("Enter your max");
console.log(max);

let random = Math.floor([Math.random()*max] +1);
console.log(random);

let guess = prompt("guess the number");

// while(guess != random || guess != "quit"){

//     random = Math.floor([Math.random()*10] +1);
//     guess = prompt("Enter your guess");
// }

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break
    }
    if(guess == random){
        console.log("you are right! congrats!!");
        break;
    }
    else if(guess < random){
        guess = prompt("your guess was too small. Please try again");
    }
    
    else{
        guess = prompt("your guess was too large . Please try again");
    }
}

console.log("Game Over");


