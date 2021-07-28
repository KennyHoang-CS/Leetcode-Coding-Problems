/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = ++digits[i];
            return digits; 
        }
        digits[i] = 0; 
    }
    let newArr = new Array(len + 1).fill(0);
    newArr[0] = 1; 
    return newArr; 
};

