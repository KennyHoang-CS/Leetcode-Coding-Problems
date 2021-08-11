/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    
    let result = 0;
    let matches;
    let teams; 
    while (n !== 1) {
        
        // check if teams is even
        if (n % 2 === 0) {
            matches = n / 2;
        } else if (n % 2 !== 0) { // check if teams is odd
            matches = (n - 1) / 2; 
        }
        teams = n - matches; 
        n = teams;
        result += matches; 
    }
    
    return result; 
};
