/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    return Number(pow(BigInt(a), BigInt(b.join('')), 1337n));
};

const pow = (a,b,m) => {
    if(a === 0n) return 0n;
    if(b === 0n) return 1n;
    
    let res = 1n;
    
    // loop till `B` become 0
    while(b > 0n) {
        // if `b` is odd, multiply the result by `a`
        if(b & 1n) res = (a * res) % m;
    
        // divide `b` by 2
        b >>= 1n;
        
        // multiply `a` by itself
        a = (a * a) % m;
    };
    return res;
}
