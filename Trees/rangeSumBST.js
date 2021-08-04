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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
    
    let rangeSum = 0; 
    
    function helper(root) {
        if (!root) return; 
        if (root.val >= low && (root.val <= high)) {
            rangeSum += root.val; 
        }
        helper(root.left);
        helper(root.right);
      
    }
    helper(root); 
    
    return rangeSum; 
};