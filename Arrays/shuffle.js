/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    
    let x = 0;
    let y = n; 
    let result = [];
    
    while (x < n) {
        result.push(nums[x]);
        result.push(nums[y]);
        ++x;
        ++y;
    }
    
    return result; 
};