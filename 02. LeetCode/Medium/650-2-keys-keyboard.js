/**
 * @param {number} n
 * @return {number}
 */

const max = 1001;
const primes = new Array(max).fill(0);

const smallestPrimeFactors = () => {
    for (let i = 2; i <= max; i++) {
        if (primes[i] === 0) {
            primes[i] = i;
            for (let j = i * i; j < max; j += i) {
                if (primes[j] === 0) primes[j] = i;
            }
        }
    }
}

smallestPrimeFactors()


var minSteps = function(n) {
    let ops = 0;
    
    while(n !== 1) {
        ops += primes[n];
        n = parseInt(n / primes[n]);
    }
    
    return ops;
};
