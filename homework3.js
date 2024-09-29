//Ex1.Given a number. Print the sum of digits.
// with while
let num ;
let sum = 0;
if(num < 0){
    num = num * -1;
}

while(num > 0){
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10)
}
console.log(sum);

//with for
let num ;
let sum = 0;
if(num < 0){
    num = -num;
}
for(let newNum = num; newNum > 0; newNum = Math.floor(newNum / 10)){
    let lastDigit = newNum % 10;
    sum += lastDigit;
}
console.log(sum);

//Ex2.Given a number. Print the multiplication of digits.
//with while
let num ;
let sum = 1;
if(num < 0){
    num = num * -1;
}

while(num > 0){
    let lastDigit = num % 10;
    sum *= lastDigit;
    num = Math.floor(num / 10)
}
console.log(sum);

//with for
let num ;
let sum = 1;
if(num < 0){
    num = -num;
}
for(let newNum = num; newNum > 0; newNum = Math.floor(newNum / 10)){
    let lastDigit = newNum % 10;
    sum *= lastDigit;
}
console.log(sum);

//Ex3.
//with while
let num ; 
let sum = 0;
let sum1 = 1;

if (num <= 0) {
    console.log('Cannot calculate.');
} else {
    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        sum1 *= lastDigit;
        num = Math.floor(num / 10);
    }
    
   if (sum1 % sum === 0) {
        console.log('Quotient is ' + Math.floor(sum1 / sum));
    } else {
        console.log('Remainder is ' + (sum1 % sum));
    }
}

//with for
let num ; 
let sum = 0;
let sum1 = 1;

if (num <= 0) {
    console.log('Cannot calculate.');
} else {
    for ( let newNum = num; newNum > 0; newNum = Math.floor(newNum / 10)) {
        let lastDigit = newNum % 10;
        sum += lastDigit;
        sum1 *= lastDigit;
    }
    
   if (sum1 % sum === 0) {
        console.log('Quotient is ' + Math.floor(sum1 / sum));
    } else {
        console.log('Remainder is ' + (sum1 % sum));
    }
}