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
 var middleNode = function(head) {
    // if head is empty, return
    if (!head) return;
    
    // loop through the list to determine the list's length.
    let length = 0;
    let ptr = head; 
    while (ptr) {
        ++length;
        ptr = ptr.next; 
    }

    // calculate the mid using that list.
    ptr = head; 
    let mid = Math.floor(length / 2); 
    let midFlag = 0; 
    while (midFlag < mid + 1) {
        if (midFlag === mid) return ptr;
        ptr = ptr.next; 
        ++midFlag;     
    }
};

