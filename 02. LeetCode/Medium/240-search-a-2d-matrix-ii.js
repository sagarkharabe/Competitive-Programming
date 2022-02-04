/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let pointerI = 0;
    let pointerJ = n - 1;
    // start from right corner
    while(pointerI < m && pointerJ >= 0) {
        if(matrix[pointerI][pointerJ] === target) return true;
        else if(matrix[pointerI][pointerJ] < target) pointerI++;
        else pointerJ--;
    }
    
    return false;
};
