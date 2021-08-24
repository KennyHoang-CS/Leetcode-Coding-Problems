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
 * @return {string[]}
 */
/*
    Given the root of a binary tree, return all root-to-leaf paths in any order.
    A leaf is a node with no children.
*/
var binaryTreePaths = function(root) {
    
    let paths = [];
    dfs(root, '');
    return paths; 
    
    function dfs(root, path) {
        
        if (root === null) return; 
        
        path += root.val; 

        // leaf node, so push in current path. 
        if (!root.left && !root.right) {
            paths.push(path); 
            return; 
        } 
       
        // traverse left and right. 
        dfs(root.left, `${path}->`);
        dfs(root.right, `${path}->`); 
    }
};