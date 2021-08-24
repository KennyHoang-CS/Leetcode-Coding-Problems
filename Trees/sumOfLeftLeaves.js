/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Given the root of a binary tree, return the sum of all left leaves.

var sumOfLeftLeaves = function(root) {
    
    let sum = 0; 
    dfs(root);
    
    function dfs(root) {
        
        if (!root) return; 
        
        if (root.left !== null) {
            if (!root.left.left && !root.left.right) {
                sum += root.left.val; 
            } else {
                dfs(root.left);
            }
        }
        dfs(root.right); 
    }
    
    return sum; 
};