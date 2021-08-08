/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    
    let size = nums.length;
    let i = 0; 
    
    while (0 < size) {
        nums.push(nums[i]);
        --size;
        ++i; 
    }
    
    return nums; 
};