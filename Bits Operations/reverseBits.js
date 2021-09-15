/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//   https://leetcode.com/problems/reverse-bits/
var reverseBits = function(n) {
    let result = 0; 
    
    for (let i = 0; i < 32; i++) {
        result <<= 1; 
        if (n & 1 === 1) ++result;
        n >>= 1; 
    }
    
    return result >>> 0; 
};