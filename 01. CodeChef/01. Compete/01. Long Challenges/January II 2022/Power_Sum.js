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

const solve = (n, arr) => {
	let sum = arr.reduce((acc, num) => acc + num, 0);
	
	if((sum & sum - 1) === 0) return console.log(0);
	
	const minNextPower = Math.ceil(Math.log2(sum));
	const remainder = (1 << minNextPower) - sum;
	const min = Math.min(...arr);
	const multiplier = (remainder + min) / min;
	const index = arr.indexOf(min);
	console.log(1);
	console.log(1 + " " + multiplier);
	console.log(index + 1)
	
};

const main = () => {
	const t = +(readLine());
	for (let i = 0; i < t; i++) {
		const n = +(readLine());
		const arr = readLine().split(' ').map(Number);
		solve(n, arr)
	}
}