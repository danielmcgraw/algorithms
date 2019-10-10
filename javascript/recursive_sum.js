const recursiveSum = (arr) => {
	return arr.length ? (arr[0] + recursiveSum(arr.slice(1, arr.length))) : 0;
}
