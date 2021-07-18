/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    
    // return 0 if string is empty.
    if (needle === '' || (needle === haystack)) return 0; 
    
    let flag; 
    // loop through the haystack. 
    for (let i = 0; i < haystack.length; i++) {
    
        // if the needle was found, return the index of first occurrence 
        if (flag) {
            return answerIdx;
        }

        // locate the first char of needle
        if (haystack[i] === needle[0]) {
            answerIdx = i; 
            // check the next haystack chars of needle size 
            let iCopy = i; 
            let j = 0; 
            while (j < needle.length) {                
                if (haystack[iCopy] === needle[j]) {
                    flag = true
                } else {
                    flag = false; 
                    break; 
                }
                ++j; 
                ++iCopy; 
            }
        }
    }

    if (flag) {
        return answerIdx;
    } else {
        return -1;
    }
};
