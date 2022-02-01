/**
 * @param {string} s
 * @return {string[]}
 */

var letterCasePermutation = function(s) {
    s = s.toLowerCase();
    
    let numRegex = /[0-9]/;
    let perms = [];
    
    perms.push(s[0]);
    if(!numRegex.test(s[0])) {
        perms.push(s[0].toUpperCase())
    }
    
    for(let i = 1; i < s.length; i++) {
        const char = s[i];
        const currentPerms = [];
        if(numRegex.test(char)) {
            for(let j = 0 ; j < perms.length; j++) {
                currentPerms.push(perms[j] + char);
            }
        } else {
            for(let j = 0 ; j < perms.length; j++) {
                currentPerms.push(perms[j] + char);
                currentPerms.push(perms[j] + char.toUpperCase());
            }
        }
       
        perms = currentPerms;
    }
    
    return perms;
};

// TC : O(2^N * N)
