/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = false) {
    let left = 0;
    let right = s.length - 1;
    
    while(left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else if(!flag && (s[left + 1] === s[right] || s[left] === s[right - 1])) {
            return validPalindrome(s.slice(0, left) + s.slice(left + 1), true) || 
                validPalindrome(s.slice(0, right) + s.slice(right + 1), true);
        } else if(right - left === 1) {
            return true;
        } else return false;
    }
    
    return true;
};
