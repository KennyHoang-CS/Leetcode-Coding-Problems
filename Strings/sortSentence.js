/**
 * @param {string} s
 * @return {string}
 * Easy
 */
const sortSentence = function(s) {

    // make words array from s.
    let words = s.split(' ');
    let result = Array.from({ length: words.length - 1});

    let idxToInsert; 
    // traverse words.
    for (let i = 0; i < words.length; i++) {
        idxToInsert = words[i].slice(-1) - 1; 
        result[idxToInsert] = words[i].substring(0, words[i].length - 1);
    }
    
    return result.join(' '); 
};