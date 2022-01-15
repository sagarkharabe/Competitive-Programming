/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    
    let fresh = 0, queue = [];
    
    for(let i = 0 ; i < height; i++) {
        for(let j = 0 ; j < width; j++) {
            if(grid[i][j] === 2) queue.push([i, j]);
            else if(grid[i][j] === 1) fresh++;
        }
    }
    
    let minutes = 0;
    
    while(queue.length) {
        const size = queue.length;
        for(let i = 0 ; i < size ; i++) {
            const [x, y] = queue.shift();
            if(x - 1 >= 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                queue.push([x - 1, y]);
                fresh--;
            }
            if(x + 1 < height && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                queue.push([x + 1, y]);
                fresh--;
            }
            if(y - 1 >= 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                queue.push([x, y - 1]);
                fresh--;
            }
            if(y + 1 < width && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                queue.push([x, y + 1]);
                fresh--;
            }
        }
        if(queue.length) minutes++;
    }
    
    return fresh === 0 ? minutes : -1;
};
