/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    
    // parse num into a string array.
    let s = Array.from(num.toString());
    
    let max = 0;    
    let allNines = true; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '6') {
            s[i] = '9'; 
            let a = s.slice(0, i);
            let b = s.slice(i); 
            let result = a.join('') + b.join('');
            max = Math.max(num, max, parseInt(result));
            s[i] = '6';
            allNines = false; 
        }
    }

    if (allNines) return num;
    
    return max;
};
