/**
 * @param {number[]} nums
 * @return {number}
 */ 
const genDivisors = () => {
    let max = 1e5 + 1;
    const divisors = new Array(max).fill(0).map((el, i) => [1, i]);
    
    for(let i = 2; i <= max ; i++) {
        for(let j = i + i; j < max; j += i) {
            divisors[j].push(i);
        }
    }
    return divisors;
}

const cache = genDivisors();

var sumFourDivisors = function(nums) {
    let sum = 0;
    
    for(const num of nums) {
        if(cache[num].length === 4) {
            sum += cache[num].reduce((acc, c) => acc + c, 0);
        }
    }
    
    return sum
};
