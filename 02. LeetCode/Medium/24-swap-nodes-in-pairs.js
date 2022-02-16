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

// Reverse LL in two pairs
var swapPairs = function(head) {
    let prev = new ListNode(0, head);
    let newHead = prev;
    let first = head;
    let second = first ? first.next : null;
    
    while(first && second) {
        let temp = second.next;
        second.next = first;
        first.next = temp;
        prev.next = second;
        prev = first;
        first = first.next;
        second = first ? first.next : null;
    }
    
    return newHead.next;
};

// Swap just the values in two pairs
var swapPairs = function(head) {
    let first = head;
    let second = first ? first.next : null;
    
    while(first && second) {
        let temp = second.val;
        second.val = first.val;
        first.val = temp;;
        first = second.next;
        second = first ? first.next : null;
    }
    
    return head;
};
