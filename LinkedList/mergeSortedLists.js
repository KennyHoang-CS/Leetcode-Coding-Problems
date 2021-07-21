/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    
    let newNode = new ListNode(); 
    let temp = newNode; 
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            newNode.next = l1;
            l1 = l1.next;
        } else {
            newNode.next = l2;
            l2 = l2.next; 
        }
        newNode = newNode.next; 
    }
    newNode.next = l2 === null ? l1 : l2; 
    
    return temp.next;
};
