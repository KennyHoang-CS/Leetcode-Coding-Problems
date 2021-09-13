/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.
*/
var hammingDistance = function(x, y) {
    let distance = 0;
    
    for (let i = 0; i < 31; i++) {
        if (checkBits(x, i) !== checkBits(y, i)) distance++; 
    }
    
    return distance; 
};

function checkBits(a, b) {
    return (a & 1 << b) > 0 ? 1 : 0; 
}

      


