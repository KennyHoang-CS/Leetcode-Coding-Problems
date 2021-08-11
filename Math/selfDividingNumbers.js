/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    
    let validate = false;
    let digits;
    let results = [];
    for (let i = left; i <= right; i++) {
        
        digits = Array.from(i.toString());
        for (let j = 0; j < digits.length; j++) {
            if (i % digits[j] === 0) {
                validate = true; 
            } else {
                validate = false; 
                break;
            }
        }
        if (validate) {
            results.push(i);
            validate = false; 
        }
    }
    
    return results; 
};

// loop for 'right' amount of times starting from left

    // for each element a, make a string array B 

    // loop through array B of b elements. 

        // for each element b, check if the element a % b == 0  
        // a flag to indicate if each element b passes the check.
        // if passed, add element a to results array. 

// return results. 