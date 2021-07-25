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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    
    if (!root) return [];
    let queue = [];
    let result = [];
    let currentNode;
    queue.push(root)
    
    while(queue.length) {
        let size = queue.length; 
        let temp = []; 
        for (let i = 0; i < size; i++) {
            currentNode = queue.shift();
            if (!currentNode) break; 
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right); 
            temp.push(currentNode.val);
        }
        result.push(temp);
    }
    
    return result; 
};
