/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode.com/problems/subsets/
var subsets = function(nums) {
    
    if (nums.length === 0 || nums === null) return []; 
    
    const N = nums.length; 
    let result = [];
    
    for (let bitmask = 0; bitmask < (1 << N); bitmask++) { 
        let temp = []; 
        for (let i = 0; i < N; i++) {
            if (getBit(bitmask, i) === 1) {
                temp.push(nums[i]);
            }
        }
        result.push(temp);
    }
    
    return result; 
};

function getBit(n, x) {
    return (n & 1 << x) > 0 ? 1 : 0; 
}