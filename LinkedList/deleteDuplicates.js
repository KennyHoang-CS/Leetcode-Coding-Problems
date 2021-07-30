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
const deleteDuplicates = function(head) {
    
    let current = head;
    let next = head; 
    
    while (current) {
        if ((current.next !== null) && current.val === current.next.val) {
            current = current.next.next; 
        } else {
            current = current.next;
        }
        while (current && (next.val === current.val)) {
            current = current.next; 
        } 
        next.next = current; 
        next = current; 
    }
    
    return head; 
};
