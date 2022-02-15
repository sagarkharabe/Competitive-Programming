/**
 * @param {string} s
 * @return {string}
 */

var removeInvalid = (s, open, close) => {
    let openCount = 0;
    let res = [];
    for(let i = 0 ; i < s.length; i++) {
        const char = s[i];
        if(char === open) openCount++;
        else if(char === close) {
            if(openCount) openCount--;
            else continue;
        }
        res.push(char)
    }
    return res;
}
var minRemoveToMakeValid = function(s) {
    const left = removeInvalid(s, '(', ')');
    const right = removeInvalid(left.reverse().join(''), ')', '(')

    return right.reverse().join('');
};
