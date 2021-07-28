/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    // filter out non-chars.
    let validChars = /[a-zA-Z0-9]/;
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(validChars)) {
            newStr += s[i].toLowerCase();
        }
    }

    // validate if its a palindrome. 
    let start = 0;
    let end = newStr.length - 1; 
    while (start < end) {
        if (newStr[start] !== newStr[end]) {
            return false; 
        }
        ++start;
        --end;
    }
    
    return true; 
};