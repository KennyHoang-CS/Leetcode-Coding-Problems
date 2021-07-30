/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    
    if (s === ' ') return 0; 
    
    // split each word into an array.
    let words = s.split(' '); 

    let lastLen = words.length - 1; 
    // get the length of last element index that !== ''.
    
    for (let i = lastLen; i >= 0; i--) {
        if (words[i] !== '') {
            return words[i].length;
        }
    }
    
    return 0; 
};