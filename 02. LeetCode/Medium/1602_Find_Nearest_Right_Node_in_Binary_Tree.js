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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    let queue = [root];
    
    while (queue.length) {
        const len = queue.length;
        for(let i = 0 ; i < len; i++) {
            let node = queue.shift();
        
            if(node === u) {
                if(i + 1 < len) return queue.shift();
                else return null;
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        } 
        
    }
    
    return null;
};
