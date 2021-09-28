var fruits = ["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits);

// 02 Acces 

var ingredients = ["eggs","milk","butter"]
console.log(ingredients[1]);
console.log(ingredients[2]);

// Add and Remove

var objects = ["pen","book","lamp"];
console.log(objects);

objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

// Order 

var numbers = [4,10,8,12,6];
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// Boucles 

var total = 0;
var limite = 10;

for (let i = 1; i <= limite ; total = total + i++ ){
    console.log(total + i);
};

// Reverse 

var sentence = "Hello Konexio !";
var newString = "";

for (var i = sentence.length - 1; i >= 0; i--) { 
    newString += sentence[i];
}
console.log(newString);

// FizzBuzz 

var enter = 100;

for (let i = 0; i <= enter ; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(i , `FizzBuzz`);
    }

    else if (i % 3 == 0){
        console.log(i,`Fizz`);
    }

    else if (i % 5 == 0){
        console.log(i, `Buzz`);
    }
    else if (i % 7 == 0){
        console.log("");
    }
    else{
        console.log(i);
    }
}

// Bonus II

var total2 = 0
var limite2 = 10
var count = 1

while (count < limite2){
    total2 = total2 + count++
    console.log(total2 + count);
}

// Bonus III 

var mates = ["Marco","Eloi","Jong","Hélène","Rébecca","Kevin JM","Kévin","Salwa","Hanaa","Ahmed","Alin","Jeremy","Vincent","Bilal","Edouard","Chaïma","Syrine","Séverin","Karimou","Evan"]

console.log(mates.length);

var randomMates = mates[Math.floor(Math.random() * mates.length)];;

console.log(`The Best mate is ${randomMates}`);

// Bonus IV 

var rArray = [];
var max = 100;
var min = 0;

for (; rArray.length < 20  ; rArray.push(Math.floor(Math.random() * (max - min +1) + min ) ) ){
}
console.log(rArray);

let result = rArray[0];

// boucler sur chaque élément afin de stocker la plus grande valeur dans ma variable en la comparant a la précédente

rArray.forEach(function (e){

  if(result < e){ result = e };
  
});

  // return le resultat du plus grand
console.log(result);
