//Ex1.Given a number. Print the sum of digits.
// with while
function productDigits(num){
    let sum = 0;
if(num < 0){
    num = num * -1;
}

while(num > 0){
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10)
}
    return sum;
}

//with for
function productDigits(num){
    let sum = 0;
if(num < 0){
    num = -num;
}
for(let newNum = num; newNum > 0; newNum = Math.floor(newNum / 10)){
    let lastDigit = newNum % 10;
    sum += lastDigit;
}
    return sum;
}

//Ex2.Given a number. Print the multiplication of digits.
//with while
function sumDigits(sum){
    let sum = 1;
if(num < 0){
    num = num * -1;
}

while(num > 0){
    let lastDigit = num % 10;
    sum *= lastDigit;
    num = Math.floor(num / 10)
}
    return sum;
}

//with for
function sumDigits(sum){
    let sum = 1;
if(num < 0){
    num = -num;
}
for(let newNum = num; newNum > 0; newNum = Math.floor(newNum / 10)){
    let lastDigit = newNum % 10;
    sum *= lastDigit;
}
    return sum;
}

//Ex3.Insert a number. Calculate product and sum of the digits of the number. If product is
//divisible by the sum, print the quotient, otherwise print the remainder.
//with while
function relationship(num){
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
        return 'Quotient is ' + Math.floor(sum1 / sum);
    } else {
       return 'Remainder is ' + (sum1 % sum);
    }
}
}

//with for
function relationship(num){
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
        return 'Quotient is ' + Math.floor(sum1 / sum);
    } else {
        return 'Remainder is ' + (sum1 % sum);
    }
}
}