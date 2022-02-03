/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Rotate Groups of Four Cells
var rotate = function(matrix) {
    const n = matrix.length;
    
    for(let i = 0 ; i < (n + 1)/ 2 ; i++) {
        for(let j = i; j < n - 1 - i; j++) {
            let temp = matrix[j][n - 1 - i]
            
            matrix[j][n - 1 - i] = matrix[i][j];
            
            [matrix[n - 1 - i][n - 1 - j], temp] = [temp, matrix[n - 1 - i][n - 1 - j]];
            
            [matrix[n - 1 - j][i], temp] = [temp, matrix[n - 1 - j][i]];
            
            matrix[i][j] = temp;
        }
    }
};


// transpose and reflect -> Reverse on Diagonal and then Reverse Left to Right
var rotate = function(matrix) {
    transpose(matrix);
    reflect(matrix)
}

const transpose = (matrix) => {
    const n = matrix.length;
    for(let i = 0; i < n ; i++) {
        for(let j = i + 1; j < n ; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

const reflect = (matrix) => {
    const n = matrix.length;
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]]
        }
    }
}
