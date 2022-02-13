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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = l1;
    
    while(l2 !== null || carry > 0) {
        const x1 = l1 ? l1.val : 0;
        const x2 = l2 ? l2.val : 0;
        l1.val = (x1 + x2 + carry) % 10;
        carry = parseInt((x1 + x2 + carry) / 10);
        
        l2 = l2 ? l2.next : null;
        if(!l1.next && (l2 || carry)) {
            l1.next = new ListNode(0);
        } 
        
        l1 = l1.next;
    }
    return head;
};
