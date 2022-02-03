/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const result = [];
    
    for(let i = 0 ; i < (n + 1) / 2 ; i++) {
        if(i >= m - i) break;
        for(let j = i; j < m - i; j++) {
            result.push(matrix[i][j]);        
        }
        
        if(i + 1 > n - 1 - i) break;
        for(let j = i + 1; j <= n - 1 - i; j++) {
            result.push(matrix[j][m - 1 - i]);
        }

        if(m - 2 - i < i) break;
        for(let j = m - 2 - i; j >= i; j--) {
            result.push(matrix[n - 1 - i][j]);
        }

        if(n - 2 - i < i + 1) break;
        for(let j = n - 2 - i; j >= i + 1 ; j--) {
           result.push(matrix[j][i]);
        }
        
    }
    
    return result;
};
