const recursiveMaxNum = (arr) => {
	if (!arr.length) return null;
	return arr.length === 1 ? arr[0] : Math.max(arr[0], recursiveMaxNum(arr.slice(1, arr.length)))
}
