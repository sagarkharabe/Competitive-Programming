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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, currentSum = 0, path = [], paths = []) {
    if(!root) return paths; 
    
    const sum = currentSum + root.val;
    const newPath = [...path, root.val];
    
    if(!root.left && !root.right && sum === targetSum) {
        paths.push(newPath);
        return paths;
    } else {
        pathSum(root.left, targetSum, sum, newPath, paths);
        pathSum(root.right, targetSum, sum, newPath, paths)
    }
    
    return paths;
    
};
