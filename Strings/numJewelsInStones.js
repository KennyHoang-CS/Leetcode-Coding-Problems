/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * Difficulty: Easy 
 */
const numJewelsInStones = function(jewels, stones) {
    
    let jewelsObj = {};
    for (let i = 0; i < jewels.length; i++) {
        if (jewelsObj[jewels[i]]) {
            jewelsObj[jewels[i]] += 1; 
        } else {
            jewelsObj[jewels[i]] = 1; 
        }
    }
    
    let stonesObj = {};
    for (let i = 0; i < stones.length; i++) {
        if (stonesObj[stones[i]]) {
            stonesObj[stones[i]] += 1;
        } else {
            stonesObj[stones[i]] = 1; 
        }
    }
    
    let counter = 0;
    for (const key in stonesObj) {
        if (jewelsObj[key]) {
            counter += stonesObj[key]; 
        } 
    }
    
    return counter; 
};