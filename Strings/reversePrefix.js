/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

// https://leetcode.com/problems/reverse-prefix-of-word/

var reversePrefix = function(word, ch) {
    
    let chIdx;
    for (let i = 0; i < word.length; i++) {
        if (ch == word[i]) {
            chIdx = i; 
            break; 
        }
    }
    
    return word.substring(0, chIdx + 1).split('').reverse().join('') + word.substring(chIdx + 1, word.length); 
};