/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    
    let current = head; 
    let next; 
    let prev; 
    let length = 0; 
    
    // determine the length of the list. 
    while (current !== null) {
        ++length;
        current = current.next; 
    }
    
    // find nth node position from the list end and set 'current' there. 
    let nodeToDelete = length - n; 
    let i = 0;
    current = head; 
    while (i < nodeToDelete) {
        prev = current; 
        current = current.next; 
        i++;
    }
    
    // list only has one node, and n = 1. 
    if ((nodeToDelete === 0) && n === 1) {
        return null; 
    }
    
    // deleting the tail node. 
    if (n === 1) {
        prev.next = null; 
        return head; 
    }
    
    // remove the nth node. 
    current.val = current.next.val; 
    current.next = current.next.next;
    
    return head;
};