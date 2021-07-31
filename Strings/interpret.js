/**
 * @param {string} command
 * @return {string}
 Difficulty: Easy
 */
const interpret = function(command) {
    
    let index = 0; 
    let result = ''; 
    
    while (index < command.length) {
        let char = command[index];
        if (char === 'G') {
            result += 'G';
            ++index; 
        } else if ((char === '(') && command[index + 1] !== 'a') {
            result += 'o'; 
            index += 2; 
        } else {
            result += 'al';
            index += 4; 
        }
    }
    
    return result;
};