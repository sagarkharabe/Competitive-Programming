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

const main = () => {
	const t = +(readLine());
	for (let i = 0; i < t; i++) {
		let k = +(readLine());
		let count = 0;
		while(k > 1) {
		    if(k % 2 === 0) {
		        count++;
		        k /= 2;
		    } else break;
		}
		console.log(count);
	}
}