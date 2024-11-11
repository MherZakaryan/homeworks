//1. Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function convertNumberString(arr){
    let countStr = 0;
    let countNum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            countNum++;
        }
        if(typeof(arr[i]) === 'string'){
            countStr++
        }
    }
    return 'Numbers: ' + countNum + ', Strings : ' + countStr;  
}

//2. Write a function which receives an array and a number as arguments and returns a new
//array from the elements of the given array which are larger than the given number.

function largerGivenNumber(arr , num){
    let result = [];
for(let i = 0; i< arr.length; i++){
    if(arr[i] > num){
        result.push(arr[i])
    }
    return 'Such values do not exist.';
}
  return result;
}

//3. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
//order is violated.

function indexOffendingElement(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return i;
        } 
    }
            return -1;
}

//4.Given an object. Invert it (keys become values and values become keys). If there
//is more than key for that given value create an array.