/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// https://leetcode.com/problems/sum-of-two-integers/submissions/
var getSum = function(a, b) {
    
    let xor = a ^ b; 
    let carry = a & b; 
    
    if (carry === 0) {
        return xor; 
    } else {
        return getSum(xor, carry << 1);
    }
};