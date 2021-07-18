/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
    let current = 0; 
    let next = 1; 
    
    while (current != nums.length - 1) {
        
        if ((nums[current] + nums[next]) === target) {
            return [current, next];
        } else {
            if (next === nums.length - 1) {
                ++current; 
                next = current + 1; 
            } else {
                ++next; 
            }
        }
    }
};




