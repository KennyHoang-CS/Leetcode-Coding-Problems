/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    
    let target = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        if (index[i] === 0) {
            target = [nums[i], ...target.slice(0, target.length)];
        } 
        else if (target[index[i]]) {
            target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i], target.length)];  
        } else {
            target[index[i]] = nums[i];
        }
        console.log(target)
    }
    
    return target; 
};


// loop through nums and place its elem at the given index. 
// if index is already taken, shift the index and rest of elements to the right by 1. 
