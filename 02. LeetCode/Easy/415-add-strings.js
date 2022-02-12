/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    
    let ans = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while(i >= 0 || j >= 0) {
        const x1 = i >= 0 ? parseInt(num1[i--]) : 0;
        const x2 = j >= 0 ? parseInt(num2[j--]) : 0;
        
        const sum = x1 + x2 + carry;
        carry = parseInt(sum / 10);
        value = sum % 10;
        
        ans = value + ans;
    }
    
    if(carry > 0) ans = carry + ans;
    
    return ans;
};
