// let n = 5;

// for(let i = 0; i < n; i++){
//     console.log("hekko ",i);
// }

// console.log("bye!");

// console.log(process.argv);


// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//     console.log("hello to ", args[i]);
    
// }

// const info = require("./fruits");

// console.log(info);

// console.log(maths.sum(2,6));
// console.log(maths.PI)



import {sum,PI} from "./math.js";
import {generate} from "random-words";

console.log(sum(1,2));
console.log(generate())