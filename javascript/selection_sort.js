const _findSmallest = (arr) => {
	let smallest = arr[0];
	let smallestIdx = 0;
	arr.forEach((el, idx) => {
		if (el < smallest) {
			smallest = arr[idx];
			smallestIdx = idx;
		}
	});

	return smallestIdx;
}

const selectionSort = (arr) => {
	let newArr = [];
	while (arr.length) {
		let smallestIdx = _findSmallest(arr);
		newArr.push(arr.splice(smallestIdx, 1)[0]);
	};

	return newArr;
}
