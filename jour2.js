var integer = 102;
var float = 13.9;
console.log(integer,float);

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

var num = 1.5;
var rounded = Math.ceil(num);
console.log(rounded);

var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test ** bis);
console.log(test % bis);

var test2 = 143;
var bis2 = 219;
console.log(test2 > bis2);

var limit = 50;
var score = 64;

if (score >= limit){
    console.log("Ok good..");
}
else {
    console.log("Oh nooo...");
}

password = "azesdfdf";

if (password.length > 5){
    console.log("Password is secured");
}

else {
    console.log("Password isnt secured");
}

if (password.length > 5 && score >= limit){
    console.log("Ok good..");
}
else if (password.length > 5 || score >= limit){
    console.log("Something is good");
}
else{
    console.log("Nothing is good");
}

var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (max - min + 1) + min); // donnera un nombre aléatoire entre 1 et 10
console.log(random);

if (random === 6){
    console.log("Yes I win !");
}
else {
    console.log("That was so close");
}

var month = "Summer";

switch(month){
    case month="Spring":
    console.log("Thats Spring");
    break

    case month = "Winter":
    console.log("Thats Winter");
    break
    
    case month = "Autumn":
    console.log("Thats Autumn");
    break

    case month = "Summer":
    console.log("Thats Summer");
    break;

    default : console.log("Not a Month");
}

var rNumber = 14.7;
var numberCeil = Math.ceil(rNumber) - rNumber;

console.log(numberCeil);

if(numberCeil <= 0.5){
    console.log(Math.ceil(rNumber));
}
else{
    console.log(Math.floor(rNumber));
}