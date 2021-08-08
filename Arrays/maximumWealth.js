/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    let currentMax = accounts[0].reduce((a, b) => a + b, 0); 
    for (let i = 1; i < accounts.length; i++) {
        currentMax = Math.max(currentMax, accounts[i].reduce((a, b) => a + b, 0));
    }
    
    return currentMax; 
};