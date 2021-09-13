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
 * @param {number} targetSum
 * @return {boolean}
 */

/**
    Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. A leaf is a node with no children.
*/

var hasPathSum = function(root, targetSum) {
    
    let status = false;
    dfs(root, 0); 
    return true ? status : false; 
    
    function dfs(root, sumPath) {

        if (!root) return 0; 
        sumPath += root.val; 
        if (targetSum === sumPath && (!root.left && !root.right)) status = true;
        dfs(root.left, sumPath);
        dfs(root.right, sumPath); 
        
    }
};