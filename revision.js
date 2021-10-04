function space(){
    console.log("");
}
space();

// Alphabet

function sortLetter(string){

    var newString = string.split('');
    newString = newString.sort()
    newString = newString.join('')

    console.log(newString);
}
sortLetter('konexio')

space()

// XOXO + Bonus III

function countEach (n){

    var xo = 0
    var ox = 0

    n = n.split('')

    for (let i=0  ; i < n.length; i++){
        if(n[i] === 'x' || n[i] === 'X'){
            xo++
        }
        else if(n[i] === 'o' || n[i === 'O']){
            ox++
        }
        else{
            console.log(`C'est ni un X ni un O pelo`);
        }
    }

    if( xo === ox){
        console.log(true);
    }
    else{
        console.log(false);
    }

}
countEach('XoXoXo')

space();

// Palindrome 

function palin (str){
    
    var newStr = str.split('')

    newStr = newStr.reverse()

    newStr = newStr.join('')

    if(newStr === str){
        console.log('Palindrome !');
    }
    else{
        console.log('Huston We have a problem');
    }

    // console.log(newStr);

}
palin('hanah')

space()

// Swap 

function swap (iSwap){

    var swapper = ''

    for(let i = 0; i < iSwap.length; i++){

        if(iSwap[i] === iSwap[i].toLowerCase()){

            swapper += iSwap[i].toUpperCase()
        }
        else if (iSwap[i] === iSwap[i].toUpperCase()){

            swapper += iSwap[i].toLowerCase()
        }
    }
    console.log(swapper);

}
swap('KonEXiO')

space()

// Bonus I

function makeItSponge (words){

    var newWords = ""

    for(let i = 0; i < words.length ; i++){

        if (words[i] === " "){
            newWords += ' '
            newWords +=  words[i + 1].toUpperCase()
        }
        else if(i % 2 !== 0){

            newWords += words[i].toLowerCase()
        }
        else if (i % 2 === 0){

            newWords += words[i].toUpperCase()
        }
        else{
            console.log('Theres a problem my dude');
        }
    }
    console.log(newWords);

}
makeItSponge("Javascript is easy");