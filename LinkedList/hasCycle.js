/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    
    if (!head) return false; 
    if (head.next === null) return false; 
    let nodes = new Set(); 
    let current = head; 
    
    while (current) {
        let nodeSeen = nodes.has(current);
        if (!nodeSeen) {
            nodes.add(current); 
        } else if (nodeSeen) {
            return true;
        }
        current = current.next;     
    }
    
    return false; 
};