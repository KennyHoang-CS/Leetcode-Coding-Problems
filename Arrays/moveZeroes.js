/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    
    let currentPtr;
    let nextPtr; 
    if (nums[0] === 0) {
        currentPtr = 0;
        nextPtr = 1; 
    } else if (nums[0] !== 0) {
        currentPtr = 1;
        nextPtr = 2
    } 
    
    let hasZeroes = false;
    // check for zeroes .... 
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) { // moment we found a zero, break out! 
            hasZeroes = true; 
            break; 
        }
    }
    
    
    while ((hasZeroes) && (nums.length > 1) && ((currentPtr !== nums.length - 1) && nextPtr !== nums.length)) {
        
        if (nums[currentPtr] === 0) {
            if (nums[nextPtr] !== 0) {
                nums[currentPtr] = nums[nextPtr];
                nums[nextPtr] = 0; 
                currentPtr += 1;
                nextPtr = currentPtr + 1; 
            } else {
                nextPtr += 1; 
            }
        } else { // currentPtr landed on a 0 value. 
            if (nums[currentPtr] === 0) {
                if (nums[nextPtr] !== 0) {
                    nums[currentPtr] = nums[nextPtr];
                    nums[nextPtr] = 0; 
                    currentPtr += 1;
                    nextPtr = currentPtr + 1; 
                }
                else {
                    nextPtr += 1; 
                }
            } else {
                currentPtr += 1;
                nextPtr += 1; 
            }
        }
    }
}


        


