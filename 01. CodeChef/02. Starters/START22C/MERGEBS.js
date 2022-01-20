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

function solve(N, A, B) {
   const countA = new Array(N + 1).fill(0);
	const countB = new Array(N + 1).fill(0);

	for (let i = N - 1; i >= 0; i--) {
		countA[i] = A[i] === '0' ? countA[i + 1] + 1 : countA[i + 1];
		countB[i] = B[i] === '0' ? countB[i + 1] + 1 : countB[i + 1];
	}

	const dp = new Array(N + 1).fill(-1).map(() => new Array(N + 1).fill(Infinity));

	dp[N][N] = 0;
	for (let i = N; i >= 0; i--) {
		for (let j = N; j >= 0; j--) {
			if (i < N) {
				if (A[i] === '0') {
					dp[i][j] = Math.min(dp[i][j], dp[i + 1][j])
				} else {
					dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + countA[i] + countB[j])
				}
			}

			if (j < N) {
				if (B[j] === '0') {
					dp[i][j] = Math.min(dp[i][j], dp[i][j + 1])
				} else {
					dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + countA[i] + countB[j])
				}
			}
		}

	}

	return dp[0][0];

}

const main = () => {
	const t = +(readLine());
	for (let i = 0; i < t; i++) {
		const n = +(readLine());
		const A = readLine();
		const B = readLine();
		console.log(solve(n, A, B));
	}
}
