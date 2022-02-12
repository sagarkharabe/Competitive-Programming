/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return [];
    
    let result = [];
    if(root.left) result = result.concat(postorderTraversal(root.left));
    if(root.right) result = result.concat(postorderTraversal(root.right));
    result.push(root.val);
    
    return result;
};

var postorderTraversal = function(root) {
    if(!root) return [];
    
    let result = [];
    let stack = [root];
    
    while(stack.length) {
        const current = stack.pop();
        
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
             
        result.unshift(current.val)
    }
    
    return result;
}

// Easier -> Right - Left - Mid and then reverse();
var postorderTraversal = function(root) {
    if(!root) return [];
    
    let result = [];
    let stack = [root];
    
    while(stack.length) {
        const current = stack.pop();
        
        result.push(current.val);
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    
    return result.reverse();
}
