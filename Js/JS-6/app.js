function hello(){
    console.log("hello");
}

function print1To5(){
    for (let index = 1; index <= 5; index++) {
        console.log(index);
    }
}

function IsAdult(num){
    if (num >= 18) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

function RollDice(){
    let random = Math.floor([Math.random()*6])+1;

    console.log(random);
}

function printInfo(name , age){
    console.log("my name is"+name+ " " +"I am " + age+"year");
}

const calculator = {
    num :55,
    add: function(a,b){
        return a + b;
    },

    sub: function(a,b){
        return a - b;
    },

    mul: function(a,b){
        return a * b;
    }
}

const calculator2 = {
    num :543,
    add(a,b){
        return a + b;
    },

    sub(a,b){
        return a - b;
    },

    mul(a,b){
        return a * b;
    }
}

