/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    
    let counter = 0;  
    while (num > 0) {

        // if num is odd, subtract 1, +1 to counter
        if (num % 2 !== 0) {
            num -= 1;
            ++counter;   
        } else if (num % 2 === 0) {
            num = num / 2; 
            ++counter; 
        }
    }
    
    return counter; 
};
/*
num = 14
counter: 1

14 > 0 
14 / 2 = 7

7 > 0
7 - 1 = 6
counter: 2

6 > 0 
6 / 2 = 3;
counter: 3 

3 > 0 
3 - 1 = 2; 
counter: 4

2  > 0 
2 / 2 = 1; 
counter: 5

1 > 0
1 - 1 = 0;
counter: 6


0 > 0
*/




