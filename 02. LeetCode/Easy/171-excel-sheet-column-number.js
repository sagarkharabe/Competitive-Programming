/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(A) {
    let col = 0;

    for(let i = A.length - 1; i >= 0; i--) {
        col += (A.charCodeAt(i) - 64) * Math.pow(26, A.length - 1 - i)
    }

    return col;
};
