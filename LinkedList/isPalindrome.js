/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    
    // fast will stay ahead of slow by one node. 
    let fast = head;
    let slow = head; 
    
    // set up pointers.
    //                      s    f    
    // input example:  1 -> 2 -> 2 -> 1 -> null
    while ((fast.next !== null) && (fast.next.next !== null)) {
        fast = fast.next.next; 
        slow = slow.next; 
    }
    
    let firstHalf = head;
    let secondHalf = reverseList(slow.next); // reverse the 2nd half of the linked list. 
    
    // compare the two lists.
    while (firstHalf !== null && secondHalf !== null) {
        // if the values aren't equal, not a palindrome. 
        if (firstHalf.val !== secondHalf.val) {
            return false; 
        }
        // move to next node. 
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next; 
    }
    
    return true; 
};

function reverseList(head) {
    
    let prev = null; 
    let next = null; 
    // reverse the original linked list. 
    while (head !== null) {
        // get the pointer reference to next node.  
        next = head.next; 
        // make current node point to previous node.   
        head.next = prev;
        prev = head; 
        head = next; 
    }
    return prev;
}