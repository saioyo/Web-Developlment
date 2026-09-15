// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
// };

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// };

// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve();
    },delay);
    });
    
}

// changeColor("red",1000,() => {
//     changeColor("orange",1000, () =>{
//         changeColor("green",1000, () =>
//         changeColor("yellow",1000));
//     });
// });


// function saveToDb(data,sucess,reject){
//     let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
//     if(internetSpeed > 4){
//         sucess();
//     }else{
//         reject();
//     }
// }

// saveToDb(
//     "apna college",
//     () => {
//         console.log("your data data was saved :");
//     },
//     () => {
//         console.log("weak connection. data not saved");
//     }
// );


// function saveToDb(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("resolve: event was saved");
//         }else{
//             reject("reject: event was not saved");
//         }
//     });
// }

// saveToDb("apna college") // req = promise object
// .then((result) => {
//     console.log(" data1 saved");
//     console.log(result);
//     return saveToDb("helloworld");
// })
// .then((result) => {
//         console.log("data2 saved");
//         console.log(result);
//         return saveToDb("shradha");
//     })

// .then((result) => {
//     console.log("data3 saved");
//     console.log(result);

// })
// .catch((error) => {
//     console.log(" promise was rejected");
//     console.log(error);

// });


