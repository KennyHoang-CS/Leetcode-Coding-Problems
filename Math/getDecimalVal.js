/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    
    let temp = ''; 
    let headPtr = head; 
    
    // traverse the list.
    while (headPtr) {
        // add value to temp string.
        temp += headPtr.val;  
        headPtr = headPtr.next; 
    }
  
    // return the binary rep of string. 
    return parseInt(temp, 2);
};