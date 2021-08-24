/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

/*
    Problem: Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/

var leafSimilar = function(root1, root2) {
    
    // get leaf values from root 1 and 2
    // do a dfs in-order traversal  
    let leafs = []; 
    inOrder(root1, leafs);
    
    let leafs2 = [];
    inOrder(root2, leafs2);
    
    if (leafs.length !== leafs2.length) return false;
    
    // compare the leafs stored in both arrays leafs and leafs2.
    for (let i = 0; i < leafs.length; i++) {
        if (leafs[i] !== leafs2[i]) return false; 
    }
    
    return true; 
};

function inOrder(root, arr) {
    
    if (root === null) return 0; 
    
    inOrder(root.left, arr);
    if (root.left === null && (root.right === null)) {
        arr.push(root.val);
    } 
    inOrder(root.right, arr);
}   

