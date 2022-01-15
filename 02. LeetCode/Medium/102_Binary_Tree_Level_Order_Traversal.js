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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    const queue = [[root]];
    const result = [];
    
    while(queue.length) {
        const current = queue.shift();
        const values = [];
        const next = [];
        for(const node of current) {
            values.push(node.val);
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        result.push(values);
        if(next.length) queue.push(next);
    }
    
    return result;
    
};
