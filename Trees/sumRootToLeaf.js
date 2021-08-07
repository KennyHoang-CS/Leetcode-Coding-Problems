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
var sumRootToLeaf = function(root) {
    
    // the result to return.
    let sum = 0;
    
    // keep track of current path to leaf node. 
    let pathsVisited = [];

    // use a helper function to traverse. 
    function helper(root, pathLen) {
        
        if (!root) return; 
        
        pathsVisited[pathLen] = root.val; 
        pathLen++; 
        
        // path is complete upon reaching a leaf node, so sum up the paths.
        if (!root.left && !root.right) {
            sum += sumPath(pathsVisited, pathLen);
        } else { // going to traverse left then right. 
            helper(root.left, pathLen);
            helper(root.right, pathLen);
        }
    }
    helper(root, 0);

    return sum; 
};

function sumPath(paths, len)  {
    
    // a loop to total up the current path. 
    let total = ''; 
    for (let i = 0; i < len; i++) {
        total += paths[i];
    }
    
    // using parseInt with 2 in 2nd parameter to convert binary -> decimal. 
    return parseInt(total, 2); 
}
