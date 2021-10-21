/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/determine-if-string-halves-are-alike/

var halvesAreAlike = function(s) {
    
    let vowels = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u'
    }
    
    let a = s.substring(0, s.length / 2);
    let b = s.substring(s.length / 2, s.length);
    
    let aCounter = 0;  
    for (let i = 0; i < a.length; i++) {
        let char = a[i].toLowerCase(); 
        if (vowels[char]) {
           ++aCounter; 
        }
    }
    
    let bCounter = 0;  
    for (let i = 0; i < b.length; i++) {
        let char = b[i].toLowerCase(); 
        if (vowels[char]) {
           ++bCounter; 
        }
    }
   
    return aCounter == bCounter ? true : false; 
};