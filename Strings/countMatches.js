/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * Difficulty: Easy 
 */
const countMatches = function(items, ruleKey, ruleValue) {
    
    let key;
    if (ruleKey === 'type') {
        key = 0;
    } else if (ruleKey === 'color') {
        key = 1;
    } else {
        key = 2; 
    }
    
    let numItems = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][key] === ruleValue) {
            ++numItems; 
        }
    }
    
    return numItems; 
};

