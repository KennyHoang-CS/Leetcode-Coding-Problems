/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    
    let dups =  {}; 
    
    for (let i = 0; i < nums.length; i++) {
        if (dups[nums[i]]) {
            return true;
        } else {
            dups[nums[i]] = 'filler'; 
        }
    }
    
    return false; 
};