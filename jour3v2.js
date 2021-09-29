// Nombre pairs
var count = 0;

for (let i = 11; i < 47; i++){
    if(i === 11){
        console.log(i);
    }
    else if (i % 2 === 0){
        console.log(i);
        count = count + i
    }
}
console.log(count);

console.log("");

// Nombre impairs

var count2 = 0

for(let i = 109; i < 588 ; i++){
    if (i === 109){
        console.log(i);
    }
    else if (i % 2 !== 0){
        console.log(i);
        count2 = count2 +i
    }
}
console.log(count2);

// Puissances et racines carrés

var number = [1,2,3,4,5]

var squares = []

var roots = []

for (let i = 0; i < number.length; i++){
    var sqArray = number[i] ** 2;
    squares.push(sqArray);
}

console.log(squares);

for(let i = 0 ; i < squares.length ; i++){
    var rootArray = Math.sqrt(squares[i])
    roots.push(rootArray)
}
console.log(roots);

// Table de multiplication I

for(let i = 0; i <= 10; i++){
    console.log(3 * i);
}

console.log("");

// Table de multiplication II

for (let i = 0; i <= 10; i++){
    console.log("");
    for ( j = 0; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log("");

// Factorielle I

var counter = 1

for ( let i = 7; i > 0; i--){
    counter = counter * i
    console.log(counter);
}
console.log("7! = " + counter);


// Factorielle II


for ( let i = 8; i >= 0; i--){
    
    var coount = 1
    
    for(let j = i ; j >= 1; j--){
        coount = coount * j
    }
    console.log(coount);
}


// Somme des Carrés 


