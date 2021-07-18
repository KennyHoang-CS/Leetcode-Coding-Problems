/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    
    let tempStr = '';
    let readingNumbers = false; 
    let isNegative = false; 
    let countSigns = 0; 
    for (let i = 0; i < s.length; i++) {
        
        // check for a period or there are spaces around signs before we encounter numbers.  
        if ((!readingNumbers && s[i] === '.') || ((s[i] === ('+' || '-') )
                && (s[i + 1] === ' '))) 
            return 0; 

        // after encountering numbers, stop reading if we encounter non-numbers: i.e. '92323 words'.
        if (readingNumbers && (!isDigit(s[i]))) {
            break; 
        }

        // determine if we have a negative number. 
        if (!readingNumbers && s[i] === ('-') && isDigit(s[i + 1]) && isNegative === false) {
            isNegative = true; 
        }

        // count signs, will be used to determine a case like '+-12'. 
        if (s[i] === ('-') || s[i] === '+') ++countSigns; 

        // read in numbers.
        if (isDigit(s[i])) {
            tempStr += s[i];
            readingNumbers = true; 
        }

        // if we encounter words before reading in numbers. 
        if ((!readingNumbers && s[i].match(/[a-z]/i)) || countSigns > 1) {
            return 0;
        }
    }

    // Return the answer while considering upper/lower bounds. 
    if (isNegative) {
        let result = +('-' + tempStr); 
        if (result < Math.pow(-2, 31)) return -2147483648; 
        return result; 
    } 
    
    if (+tempStr > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }

    if (+tempStr === Math.pow(2, 31)) return +tempStr - 1; 

    return Math.round(+tempStr);
};

function isDigit(char) {

    if ((char === '0') || (char === '1') || (char === '2') || (char === '3') || (char === '4')
    || (char === '5') || (char === '6') || (char === '7') || (char === '8') || (char === '9')) {
        return true; 
    }
}