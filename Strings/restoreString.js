/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
    Difficulty: Easy
 */
const restoreString = function(s, indices) {
    
    let obj = {}; 
    for (let i = 0; i < s.length; ++i) {
        obj[indices[i]] = s[i]; 
    }
    return Object.values(obj).join('');
};
    