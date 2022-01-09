/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
 var wordCount = function(startWords, targetWords) {
    let count = 0; 
    let table = {};
    
    for(let i = 0 ; i < startWords.length ; i++) {
        table[startWords[i].split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('')] = true;
    }
    
    for(let i = 0 ; i < targetWords.length; i++) {
        const target = targetWords[i].split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('');
        
        for(let j = 0 ; j < target.length ; j++) {
            if(table[target.slice(0,j) + target.slice(j + 1)]) {
                count++;
                break;
            }
        }
    }
    
    return count;
};