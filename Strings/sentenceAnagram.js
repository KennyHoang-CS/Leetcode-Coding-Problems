/**
 * @param {string} sentence
 * @return {boolean}
 */

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function(sentence) {
    
    let set = new Set(); 
    for (let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]); 
    }
    
    return set.size == 26 ? true : false; 
};