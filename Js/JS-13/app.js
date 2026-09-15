// // async function greet(){
// //     throw "weak connection";
// //     return "hello";
// // }

// // greet()
// // .then((result) =>{
// // console.log("promise was fullfilled")
// // console.log("result was :",result);
// // })
// // .catch((err)=> {
// //     console.log("promise was rejected with error",err);

// // });


// // function getNum(){
// //     return new Promise((resolve,reject) => {
// //         setTimeout(() =>{
// //             let num = Math.floor(Math.random() * 10) + 1;
// //         console.log(num);
// //         resolve();
// //         },1000);
// //         let num = Math.floor(Math.random() * 10) + 1;
// //         return num;
// //     });
// // }
// // async function demo(){
// // await getNum();
// // await getNum();
// // getNum();


// // }

// const h1 = document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             if(num < 3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log("color changed to ",color);
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function demo() {
//     try{
//         await changecolor("red", 1000);
//         await changecolor("blue", 1000);
//         await changecolor("orange", 1000);

        

//     } catch(err){
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
// }

// let jsonRes = '{"message":"https://images.dog.ceo/breeds/kelpie/n02105412_2700.jpg","status":"success"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// let student = {
//     name:"shradha",
//     marks:95,
// };

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) =>{
    return res.json();
})
.then((data) => {
    console.log("data1 =",data.fact);
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) =>{
    console.log("data2=",data2.fact);
})
.catch((err) => {
    console.log("Err -", err);
});
