/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    
    k %= nums.length;
    
    reverse(nums, 0, nums.length - 1);

    // reverse the first half of array up to K elements. 
    reverse(nums, 0, k - 1);

    // reverse the second half of array from after K elements
    reverse(nums, k, nums.length - 1);     

};

function reverse(nums, start, end) {
    while(start < end) {
        swap(nums, start, end);
        ++start;
        --end; 
    }
}

function swap(nums, start, end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp; 
}



