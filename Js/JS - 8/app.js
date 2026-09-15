// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el)
// }
// arr.forEach(print);

// let arr = [{
//     name:"aman",
//     marks:95,
// },
// {
//     name:"shradha",
//     marks:87,
// }, 
// {
//     name:"rajat",
//     marks:88,
// }
// ];

// arr.forEach((student) =>{
//     console.log(student.marks)
// }
// );

// let num = [1,2,3,4];

// let double = num.map((el) =>{
//     return el*2;
// } );
 

// let nums = [1,2,3,4,7,8,10,12];

// let ans = nums.filter((el) =>{
//     return el % 2 == 0;  // even -> true
// });

// let nums = [1,2,3,4,7,8,10,12];

// let ans = nums.reduce((res,el) => (res+el));

// let arr = [1,4,2,5,6,7,2,9,1112];

// let max = arr.reduce((res,el) => {
//     if (res < el){
//         return el;
//     }else{
//         return res;
//     }
// }
// );

// console.log(max);

// function sum(a, b = 2){
//     return a + b;
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let arr = [123456];
// let arr2 = ["SAI"];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...even, ...odd];


// const data = {
//     email:"ironman@gmail.com",
//     password:"abcd",
// };

// const dataCopy = {
//     ...data,
//     id: 123,
//     country:"India",
// };

// let arr = [1,2,3,4,5];
// let obj1 = {...arr};


// function sum(...args){
//     // arguments
//     for(let i = 0; i < args.length; i++){
//         console.log("you gave us:",args[i]);
//     }
// }

// function sum(...args){
//     return args.reduce((sum,el) => sum + el);
// }

// function min(...args){
//     return args.reduce((min,el) =>{
//         if(min > el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }

// let name = [ "tony","bruce","steve","peter"];
// let [winner,runnerup,...others] = name;
// console.log(winner,runnerup);


const student = {
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan@123",
    password:"abcd"
};

let {username: user,password:secret,city = "Mumbai"} = student;




