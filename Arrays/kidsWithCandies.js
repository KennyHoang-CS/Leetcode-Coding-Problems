/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    
    let max; 
    let greatestCandies;
    for (let i = 0; i < candies.length; i++) {
        greatestCandies = candies[i] + extraCandies;
        max = Math.max(greatestCandies, ...candies);
        if (max === greatestCandies) {
            result.push(true)
        } else result.push(false);
    }
    
    return result; 
};

// loop thru array candies.
// starting at first index, currrent candies + extra candies = K; 
// use math.max(K, ...elements); 
// if the result from max is K, then make that index true else false.  