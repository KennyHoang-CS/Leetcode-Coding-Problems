/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    
    let result = []; 

    function helper(root) {
        if (root) {
            helper(root.left);
            result.push(root.val);
            helper(root.right);
        }
    }
    helper(root);
    
    return result; 
};