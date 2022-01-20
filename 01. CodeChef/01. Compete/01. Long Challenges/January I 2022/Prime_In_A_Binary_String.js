process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

let currentLine = 0;
let input = '';

process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
	input = input.split('\n');
	main();
});

const readLine = () => {
	return input[currentLine++];
};

const solve = (s) => {
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === '1' && (s[i + 1] === '1' || s[i + 1] === '0')) return 'YES'
    }
    
    return 'NO';
}

const isPrime = (num) => {
    if(num < 2) return false; 
    else if(num === 2) return true;
    const root = Math.sqrt(num)
    for(let i = 2 ; i < root; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

const main = () => {
    let t = +(readLine());
    
    while(t--) {
       let s = readLine();
       console.log(solve(s))
    }
}