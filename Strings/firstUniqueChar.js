/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {

    let obj = {};  
    // make a char count frequency object. 
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]] = {count: ++obj[s[i]].count, index: i};
        } else {
            obj[s[i]] = {count: 1, index: i}; 
        }
    }
    
    // iterate through the object 
    for (const key in obj) {
        // return the first char that has a count of 1
        if (obj[key].count === 1) {
            return obj[key].index; 
        } 
    }
    
    // return -1 since loop didn't locate first unique char.  
    return -1; 
};

