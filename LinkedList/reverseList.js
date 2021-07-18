/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    
    if (!head) return head; 
    
    let prev = null;
    let next = null; 
    
    while(head !== null) {
        // get the pointer reference to next node.  
        next = head.next; 
        // make current node point to previous node.   
        head.next = prev;
        prev = head; 
        head = next; 
    }
    
    return prev; 
    
};