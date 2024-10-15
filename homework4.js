//Ex1.Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.

function lastBeggining(number){
    let lastDigit = number % 10;
    let number1 = number ;
    let count = 0;
    if(lastDigit === 0){
        return number;
    }
        debugger
        while(number1 > 0){
        number1 = Math.floor(number1 / 10);
        count++
        }
        let newNumber = Math.floor(number / 10);
        return lastDigit * (10 ** (count - 1)) + newNumber;
}

//Ex2.Insert a digit and a number. Check whether the digits contains in the number or not.

function fn(digit, number) {
    let numStr = number.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === digit.toString()) {
            return 'Yes'; 
        }
    }
    
    return 'No'; 
}

//Ex3.Enter a number. Reverse its first and last digits. Print the new number.

function fn(number) {
    let numStr = number.toString();
    if(numStr.length < 2){
        return number;
    }
    let res = '';
    let firstDigit = numStr[numStr.length - 1];
    let lastDigit = numStr[0];
    for (let i = 1; i < numStr.length - 1; i++) {
        res += numStr[i]       
    }
    let result = firstDigit + res + lastDigit;
     return +result;
}

//Ex4.Enter a number. Find the difference between its biggest and smallest digits.

function digitDifference(num) {
    let maxDigit = 0;
    let minDigit = 9;
    while (num > 0) {
        let digit = num % 10; 
        if (digit > maxDigit) {
            maxDigit = digit; 
        }
        if (digit < minDigit) {
            minDigit = digit; 
        }
        num = Math.floor(num / 10); 
    }
    return maxDigit - minDigit;
}
