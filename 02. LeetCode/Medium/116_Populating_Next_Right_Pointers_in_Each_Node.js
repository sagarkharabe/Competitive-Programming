/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    
    let first = [];
    
    if(root.left) first.push(root.left);
    if(root.right) first.push(root.right);
    
    let stack = [first];
    
    while(stack.length) {
        const popped = stack.pop();
        const next = [];
        for(let i = 0 ; i < popped.length; i++) {
            if(i !== popped.length - 1) popped[i].next = popped[i + 1];
            
            if(popped[i].left) next.push(popped[i].left)
            if(popped[i].right) next.push(popped[i].right);
        }
        
        if(next.length) stack.push(next);
    }
    
    return root;
};
