Searching = function() {}

// O(n)
Searching.prototype.simpleSearch = function (arr, target) {
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] == target)
			return {idx: i, steps: i+1};
	}
	return {idx: -1, steps: arr.length};
}

 // O(log n)
Searching.prototype.binarySearch = function (arr, target) {
	var stps = 0,
			low = 0,
			high = arr.length - 1;
	while (low <= high) {
		stps += 1;
		mid = Math.floor((low + high) / 2);
		if (arr[mid] == target)
			return {idx: mid, steps: stps};
		else if (arr[mid] > target)
			high = mid - 1;
		else
			low = mid + 1;
	}
	return {idx: -1, steps: stps};
}
