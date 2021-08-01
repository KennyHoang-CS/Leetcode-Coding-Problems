/**
 * @param {string} s
 * @return {number}
 * Easy 
 */
const balancedStringSplit = function(s) {
    
    // make the freq object. 
    let rlObj = {}; 
    
    // traverse the string. 
    let counter = 0; 
    for (let i = 0; i < s.length; i++) {
        if (rlObj[s[i]]) {
            rlObj[s[i]] += 1; 
        } else {
            rlObj[s[i]] = 1; 
        } 
        
        // check if R count equal L count
        if (rlObj['R'] === rlObj['L']) {
            ++counter;  
        }
    }
    
    return counter; 
};

