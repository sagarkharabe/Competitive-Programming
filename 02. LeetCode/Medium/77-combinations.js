/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, next = 1, combs = [], comb = []) {
    if(comb.length === k) combs.push(comb);
    
    for(let i = next ; i <= n; i++) {
        combs = combine(n, k , i + 1, combs, [...comb, i])
    }
    
    return combs;
};
