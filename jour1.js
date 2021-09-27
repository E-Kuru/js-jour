console.log("Hello World");

var test = "My name is Evan";
console.log(test);

var firstName = "Evan";
console.log(`Nice to meet u ${firstName}`);

var testLength = "I'm very long I guess";
console.log(testLength.length);

var food = "Croissant is meh";
console.log(food.replace('meh','really good'));

var basic = "This is cool,";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic, basicUp, basicDown);

var word = "Banana";
var letters = word.split('');
console.log(letters);

var age = 19;
var template = `I'm ${age} years old`;
console.log(template);

var test = "Bonjour";
var changed = test.replace('o','a');
console.log(changed);

var bonus1 = "'Hello \nWorld'"
console.log(bonus1);

var bonus2 = "Tu connais 'ce' gars là ?"
console.log(bonus2);

var substring = "une phrase lambda"
var subStr = substring.substring(0,10)
console.log(subStr);