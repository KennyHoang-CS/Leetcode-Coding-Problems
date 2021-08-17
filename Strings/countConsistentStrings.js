/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    
    // make a freq obj of allowed.
    let aObj = {}; 
    for (let i = 0; i < allowed.length; i++) {
        if (aObj[allowed[i]]) {
            aObj[allowed[i]] += 1;
        } else {
            aObj[allowed[i]] = 1; 
        }
    }
    
    // validate. 
    let counter = 0;
    let flag; 
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            // check if key in words exist in allowed.
            // if char in words does not exist, return false   
            if (!aObj[words[i][j]]) {
                flag = false; 
                break; 
            } else {
                flag = true; 
            }
        }
        if (flag) {
            ++counter; 
        }
    } 
    
    // return result.
    return counter; 
};

// Time complexity = O(O(N) + O(N^2)) = O(N^2)