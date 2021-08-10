/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {    
    
    let s = Array.from(n.toString());
    
    let product = 1;
    let sum = 0; 
    // loop through the array. 
    for (let i = 0; i < s.length; i++)  {
        // accumulate the product 
        product *= +s[i];
        // accumulate the sum
        sum += +s[i];
    }

    // return result
    return product - sum;  
};

