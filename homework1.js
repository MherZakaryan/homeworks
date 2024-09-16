Ex1.
     let num;
     if(num % 2 === 0){
         console.log('even')
     }else{
         console.log('odd')
     }

Ex2.
     let num1;
     let num2;
     if(num1 % num2 === 0 || num2 % num1 === 0){
         console.log('1')
     }else{
         console.log('0')
     } 
     
Ex3.  
     let a;
     let b;
     let c = 180 - a - b;
     if(c <= 0){
         console.log('Wrong numbers given')
     }else{
         console.log(c)
     }

Ex4.
     let a ; b ; c ; d ; e ;
     let num = (a + b + c + d + e)/5 ; 
     console.log(num); 
     
Ex5.
     let num ;
     if (( num % 3 == 0 ) && ( num % 5 == 0 ) && ( num % 7 == 0)) {
        console.log ( num ,  ' is a multiple of 3, 5 and 7.')  
     }
     else if (( num % 3 == 0 ) && ( num % 5 !== 0 ) && ( num % 7 == 0)) {
        console.log ( num , ' is a multiple of 3 and 7')
     }
     else if (( num % 3 == 0 ) && ( num % 5 == 0 ) && ( num % 7 !== 0)) {
        console.log ( num , 'is a multiple of 3 and 5')
     }
     else if (( num % 3 == 0 ) && ( num % 5 !== 0 ) && ( num % 7 !== 0)) {
        console.log ( num , 'is a multiple of 3')
     }
     else if (( num % 3 !== 0 ) && ( num % 5 == 0 ) && ( num % 7 !== 0)) {
        console.log ( num , 'is not a multiple of 5')
     }
     else if (( num % 3 !== 0 ) && ( num % 5 !== 0 ) && ( num % 7 == 0)) {
        console.log ( num , 'is not a multiple of 7')
     }
     else if (( num % 3 !== 0 ) && ( num % 5 == 0 ) && ( num % 7 == 0)) {
        console.log ( num , 'is not a multiple of 5 and 7')
     } else {
        console.log ( num , 'is not a multiple of 3, 5 and 7')
     }