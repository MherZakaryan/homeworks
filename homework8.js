//Given an array of numbers. Print frequency of each unique number. (Frequency is the
//count of particular element divided by the count of all elements)

function fn(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(arr.indexOf(num) !== i){
            continue;
        }
        count = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === num){
                count++;
            }
        }
        console.log(`${num}: ${count / arr.length}`) ;
    }
}

//Write a function, which receives an array as an argument which elements arrays of
//numbers. Find biggest negative number of each array. Return product of that numbers.If
//there is not any negative number in an array, ignore that one. Check that items of the
//given array are arrays.

function fn(arr){
    let multiplication = 1;
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            return 'Invalid Argument';
        }
        let numMin = null;
        for(let j = 0; j < arr[i].length; j++){
           let num = arr[i][j];
            if(num < 0){
                  if(numMin === null || num > numMin){
                      numMin = num;
                  }
            }
        }
        if(numMin !== null){
            multiplication *= numMin;
        }
    }
    if (multiplication === 1) {
        return 'No negatives';
    }
    return multiplication;
}

//Write a function, which receives two numbers as arguments and finds all numbers between
//them such that each digit of the number is even. The numbers obtained should be printed in a
//comma-separated sequence on a single line.

