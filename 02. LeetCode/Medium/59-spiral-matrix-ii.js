/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(_ => new Array(n).fill(0))
    let count = 1;
    for(let i = 0 ; i < (n + 1) / 2 ; i++) {
        for(let j = i; j < n - i; j++) {
            matrix[i][j] = count++;
        }
        
        for(let j = i + 1; j <= n - 1 - i; j++) {
            matrix[j][n - 1 - i] = count++;
        }

        for(let j = n - 2 - i; j >= i; j--) {
            matrix[n - 1 - i][j] = count++;
        }

        for(let j = n - 2 - i; j >= i + 1 ; j--) {
            matrix[j][i] = count++;
        }
    } 
    return matrix;
};
