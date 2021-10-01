// Object 

console.log("");

var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}

if(cat.isCute){
    console.log("He's kind of cute");
}

console.log("");

console.log(cat);

console.log("");

// Combine 

var cat2 = Object.assign(cat,cat2)

console.log(cat2.age);
console.log("");
console.log(cat2.isCute);

console.log("");

// Even 

function isEven (a){
    if( a % 2 === 0){
        console.log(`${a} est pair`);
    }
    else {
        console.log(`${a} est impair`);
    }
}

isEven(0)

console.log("");

// Compare 

function compare (a,b){
    if(a > b){
        console.log(`${a} is bigger than ${b}`);
    }
    else if ( a === b ){
        console.log(`${a} and ${b} are the same `);
    }
    else{
        console.log(`${b} is bigger than ${a}`);
    }
}

compare(1,5)

console.log("");

// Add up 

function addUp (num){

var count = 0;

    for(let i = 0; i <= num; i++){
        count += i;
    }
    console.log(count);
}

addUp(12)

console.log("");

// Time 

function format (number){

    var hour = Math.floor(number / 3600);
    number %= 3600;
    var minutes = Math.floor(number / 60);
    var seconds = number % 60;

    console.log(`${hour}h : ${minutes}mn : ${seconds}s`);
}

format(3700)

console.log("");

// Bonus 

function genPass(n){

    var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
    var password = []

    for(let i = 0; i < n; i++){

        var randomAlpha = alpha[Math.floor(Math.random() * alpha.length)];
        password.push(randomAlpha)
    }

    if(n < 6 || n > 15){
        console.log("Thats between 6 and 15 my Dude");
    }
    else{
        console.log(password.join(""));
    }
}
genPass(8)

console.log("");

// Bonus II 

function lunchDice(nbOfDice){

    var counter = 0
    var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    for(i = 0; i < nbOfDice; i++){
        random;
        counter += random
    }

    return counter;
}

p1 = lunchDice(5)
p2 = lunchDice(5)

if(p1 > p2){
    console.log(`Player 1 is the Winner he did ${p1} against ${p2}`);
}
else if(p1 < p2){
    console.log(`Player 2 is the Winner he did ${p2} against ${p1}`);
}
else{
    console.log("Equal");
}