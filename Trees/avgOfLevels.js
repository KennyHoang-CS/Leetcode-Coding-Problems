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
 * @return {number[]}
 */

/*
    Problem:  Average of Levels in Binary Tree.
*/
var averageOfLevels = function(root) {
    
    let q = [];
    q.push(root);
    let result = []; 
    let sum;
    
    while (q.length > 0) {
        let size = q.length; 
        sum = 0; 
        
        for (let i = 0; i < size; i++) {
            
            let currentNode = q.shift(); 
            sum += currentNode.val; 
            
            if (currentNode.left !== null) {
                q.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                q.push(currentNode.right); 
            }
        }
        result.push(sum / size);
    }
    
    return result; 
};


