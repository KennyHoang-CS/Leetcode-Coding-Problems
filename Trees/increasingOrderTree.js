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
 * @return {TreeNode}
 */
const increasingBST = function(root) {
    
    let newRoot = new TreeNode(0); 
    let temp = newRoot;
    function traverse(root) {
        
        if (!root) return; 
        traverse(root.left);
        newRoot.right = new TreeNode(root.val); 
        newRoot = newRoot.right; 
        traverse(root.right);
    }
    traverse(root);
    
    return temp.right; 
};