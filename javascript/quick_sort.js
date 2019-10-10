const quickSort = (arr) => {
	if (arr.length < 2) return arr;
	const pivot = Math.floor(Math.random() * (arr.length - 1));
	let less = [];
	let more = [];
	for (let i = 0; i < arr.length; i++) {
		if (i !== pivot) {
			arr[i] < arr[pivot] ? less.push(arr[i]) : more.push(arr[i]);
		}
	}

	return [...quickSort(less), arr[pivot], ...quickSort(more)];
}
