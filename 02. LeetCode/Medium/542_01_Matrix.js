/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    
    let result = new Array(m).fill(0).map(() => new Array(n).fill(Infinity));
    
    let queue = [];
    
    for(let i = 0 ; i < m; i++) {
        for(let j = 0 ; j < n; j++) {
            if(mat[i][j] === 0) {
                queue.push([i, j]);
                result[i][j] = 0;
            }
        }
    }
    
    while(queue.length) {
        let [x, y] = queue.pop();
        const current = result[x][y] + 1;
        if(x - 1 >= 0 && result[x - 1][y] > current) {
            result[x - 1][y] = result[x][y] + 1;
            queue.push([x - 1, y]);
        }
        if(x + 1 < m && result[x + 1][y] > current) {
            result[x + 1][y] = result[x][y] + 1;
            queue.push([x + 1, y]);
        }
        if(y - 1 >= 0 && result[x][y - 1] > current) {
            result[x][y - 1] = result[x][y] + 1;
            queue.push([x, y - 1]);
        }
        if(y + 1 < n && result[x][y + 1] > current) {
            result[x][y + 1] = result[x][y] + 1;
            queue.push([x, y + 1]);
        }
    }
    
    return result;
};
