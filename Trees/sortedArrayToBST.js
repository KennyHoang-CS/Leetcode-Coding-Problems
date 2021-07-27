/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1);     
};

function helper(nums, start, end) {
    if (end < start) return null; 
    let mid = Math.floor((start + end) / 2);
    let newNode = new TreeNode(nums[mid]);
    newNode.left = helper(nums, start, mid - 1);
    newNode.right = helper(nums, mid + 1, end);
    return newNode;
}

          