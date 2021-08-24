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
 * @param {number} k
 * @return {boolean}
 */
/**
    Problem: Given the root of a Binary Search Tree and a target number k, return true if there exist two 
            elements in the BST such that their sum is equal to the given target.
*/
var findTarget = function(root, k) {
    
    let set = new Set(); 
    return dfs(root);
    
    function dfs(root) {
        
        if (!root) return false; 
        
        if (set.has(k - root.val)) return true; 
        
        set.add(root.val);
        return dfs(root.left) || dfs(root.right);
    }
};