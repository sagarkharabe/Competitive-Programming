/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
    
    let carry = 1; // to add initially
    for(let i = n - 1; i >= 0; i--) {
        const num = digits[i] + carry;
        digits[i] = num % 10;
        carry = parseInt(num / 10);
    }
    
    if(carry) digits.unshift(carry);
    
    return digits;
};
