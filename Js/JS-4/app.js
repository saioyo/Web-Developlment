// let n = 0;
// while(n == 5){
//     console.log("hi")
//     n = n + 1;
// }

// for(let i = 0; i<= 5;i++){
//     console.log(i);
// }

// let n = prompt("write your number");
// n = parseInt(n);

// console.log("This is table of" + n);

// for(let i = n; i <= n * 10; i = i + n){
//     console.log(i);
// }

// let fav = "Avatar";

// let guess = prompt("Enter Your fav movie");


// while((guess != fav) && (guess != "quit")){
//     console.log("wrong");
//     guess = prompt(" wrong guess, please try again ");
// }

// if(guess == fav){
//     console.log("congrats !!");
// }
// else{
//     console.log("you quit");
// }



let todo = [];

let req = prompt("please enter your request");
console.log(req);

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("------------")
        for (let i = 0; i <todo.length; i++ ){
            console.log(i,todo[i]); 
        }
        console.log("----------")
    }
    else if(req == "add"){
        let task = prompt("please enter task you want to add");
        todo.push(task);
        console.log("task added");   
    }
    else if(req == "delete"){
        let idx = prompt("please enter the index");
        todo.splice(idx , 1);
        console.log("task deleted");
    }

    req = prompt("please enter your request");


}


