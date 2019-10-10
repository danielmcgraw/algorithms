const recursiveBinarySearch = (list, item, min = 0, max = list.length - 1) => {
	if (min > max) return -1
	const mid = Math.floor((min + max) / 2);
	const guess = list[mid]
	if (item === guess) return mid;
	if (guess < item) return recursiveBinarySearch(list, item, mid + 1, max);
	return recursiveBinarySearch(list, item, min, mid - 1);
}
