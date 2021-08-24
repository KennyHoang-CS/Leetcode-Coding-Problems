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

/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
*/
var getMinimumDifference = function(root) {
    
    let nodes = [];  
    dfs(root);
    let result = nodes[1] - nodes[0]; 
    
    for (let i = 1; i < nodes.length - 1; i++) {
        result = Math.min(result, nodes[i + 1] - nodes[i]);
    } 
    
    function dfs(root) {
        if (root !== null) {
            dfs(root.left);
            nodes.push(root.val);
            dfs(root.right);
        }
    }
    
    return result; 
};