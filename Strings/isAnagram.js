/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    
    let sObj = {}; 
    let tObj = {}; 
    
    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]]) {
            ++sObj[s[i]];
        } else {
            sObj[s[i]] = 1; 
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (tObj[t[i]]) {
            ++tObj[t[i]];
        } else {
            tObj[t[i]] = 1; 
        }
    }
    
    if (s.length > t.length) {
        for (const key in sObj) {
            if ((tObj[key] !== sObj[key]) || !tObj[key]) return false;
        }
    } else {
        for (const key in tObj) {
            if ((tObj[key] !== sObj[key]) || !sObj[key]) return false;
        }
    }
    
    return true; 
};