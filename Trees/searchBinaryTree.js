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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    let result = null;
    function traverse(root) {
        if (result !== null) return result; 
        if (!root) return;
        if (root.val === val) result = root;
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    
    return result;
};