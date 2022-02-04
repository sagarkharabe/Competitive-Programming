/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    if(compare(mat,target)) return true;
    
    // 90 deg
    transpose(mat); reflect(mat);
    if(compare(mat, target)) return true;
    
    // 180 deg
    transpose(mat); reflect(mat);
    if(compare(mat, target)) return true;
    
    // 270 deg
    transpose(mat); reflect(mat);
    return compare(mat, target);
};

const transpose = (matrix) => {
    const n = matrix.length;
    for(let i = 0 ; i < n ; i++) {
        for(let j = i + 1; j < n ; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}

const reflect = (matrix) => { // reverse
    const n = matrix.length;
    for(let i = 0 ; i < n ; i++) {
        matrix[i].reverse();
    }
}

const compare = (matrix, target) => {
    const n = matrix.length;
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n ; j++) {
            if(matrix[i][j] !== target[i][j]) return false;
        }
    }
    
    return true;
}
