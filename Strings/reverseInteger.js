/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    
    let s = x.toString().split('');
    let start = 0; 
    let result = '';
    let iStart = 0; 
    let end = s.length - 1;
    let temp; 
    
    if (s[0] === '-') start = 1; 
   
    while (start < end) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        ++start;
        --end; 
    }
    
    if (s[0] === '-') iStart = 1; 
    for (let i = iStart; i < s.length; i++) {
        result += s[i];
    }
    
    if (s[0] === '-') {
        result = '-' + result; 
        if (Number(result) < Math.pow(-2, 31)) return 0;
        return result; 
    } 
    if (+result > (Math.pow(2,31) + 1)) return 0; 
    return result; 
};