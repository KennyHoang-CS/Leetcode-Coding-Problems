/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    
    let result = [];
    
    if (n % 2 !== 0) {
        result.push(0);
    }
    
    for (let i = 2; i <= n; i = i + 2) {
        result.push(i);
        result.push(-i);
    }
        
    return result; 
};
