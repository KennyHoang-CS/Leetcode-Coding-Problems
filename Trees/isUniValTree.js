/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    
    let q = []; 
    q.push(root);
    let uniValue = root.val; 
    
    while (q.length > 0) {
        
        let node = q.shift();
        
        if (node.val !== uniValue) {
            return false; 
        } 
        
        if (node.left !== null) q.push(node.left);
        if (node.right !== null) q.push(node.right); 
    }
    
    return true; 
};