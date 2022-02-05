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

const solve = (N, K, S) => {
    let left = 0;
    let right = N - 1;
    let count = 0;
    while(left < right) {
        if(S[left] !== S[right]) {
            count++;
        }
        left++; right--;
    }
    
    if(count > K) return 'NO';
    
    return (N % 2) || (K - count) % 2 === 0 ? 'YES' : 'NO';
};

const main = () => {
	let t = +(readLine());
	while (t--) {
		const [N, K] = readLine().split(' ').map(Number);
		const S = readLine();
		console.log(solve(N, K, S));
	}
}
