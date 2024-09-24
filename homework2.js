//1.Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months is between 1 and 12.
let givenAge = +prompt('enter the age.');
let yearsOrMonths = prompt('enter months or years (in lowercase).');
if(givenAge >= 1 && givenAge <= 12 && yearsOrMonths === 'months') {
    console.log('baby');
} else if(givenAge >= 1 && givenAge <= 2 && yearsOrMonths === 'years') {
    console.log('toddler');
} else if(givenAge >= 3 && givenAge <= 12 && yearsOrMonths === 'years') {
    console.log('child');
} else if(givenAge >= 13 && givenAge <= 17 && yearsOrMonths === 'years') {
    console.log('teenager');
} else if(givenAge >= 18 && yearsOrMonths === 'years') {
    console.log('adult');
} else {
    console.log('invalid input.');
}

//2.Given three numbers. Sort them by the ascending order.
let num 
let num1 
let num2 
if(num > num1 && num1 > num2){
    console.log(num2, num1, num)
}else if(num > num2 && num2 > num1){
    console.log(num1, num2, num)
}else if(num1 > num && num > num2){
    console.log(num2, num, num1)
}else if(num1 > num2 && num2 > num){
    console.log(num, num2, num1)
}else if(num2 > num && num > num1){
    console.log(num1, num, num2)
}else if(num2 > num1 && num1 > num){
    console.log(num, num1, num2)
}

//3.Find the sign of product of three numbers without multiplication operator. Display the
//specified sign.
let num 
let num1 
let num2 
let negativeNumber = 0;
if(num === 0 || num1 === 0 || num2 === 0){
    console.log('unsigned')
}else{
if(num < 0){
    negativeNumber++
}
if(num1 < 0){
    negativeNumber++
}
if(num2 < 0){
    negativeNumber++
}

if(negativeNumber % 2 === 0){
    console.log('+')
}else{
    console.log('-')
}
}

|//4.Given the following code rewrite it using only two if operators. (Hint: use logical
//operators).
var n = +prompt();
var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1; 
}

if (n % 3 === 0 && n % 10 === 1) {
    j += 1; 
}

//5.Given a number. Print all digits of the given number.
let number = +prompt('enter the number.');
if(number < 0){
    alert('enter a positive number․');
}
if(number < 10){
    console.log(number);
}
while(number >= 10){
    let digit = number % 10;
    console.log(digit); 
    number = Math.floor(number / 10);
}