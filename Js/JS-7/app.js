// const student={
//     name:"sai",
//     age:19,
//     eng:95,
//     math:93,
//     phy:97,

//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         return avg;
//     }
// }

// try{
//     console.log(a);
// }
// catch(error){
//     console.log("caught an error... a is not defined");
// }
// console.log(a);

// const sum = (a, b) => {
//     console.log(a + b);
// }

// const qube = (n) => {
//     console.log(n**3);
// }

// console.log("Hi there!");

// setTimeout(() => {
//     console.log("Apna college");
// }, 4000);



// console.log("Welcome to");


// let id = setInterval(() => {
//     console.log("Apna College");
// },2000);

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World");
// },3000);

// console.log(id2);

const student = {
    name:"aman",
    marks:95,
     prop:this , // global scope

    getName(){
        console.log(this);
        return this.name;
    },

    getName2: function (){
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
     
};

let id = setInterval(() =>{
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran")
},10000);