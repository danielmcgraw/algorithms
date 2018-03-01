describe("Searching", function() {
	var search,
			sortedArr,
			unsortedArr;
			
	beforeEach(function() {
		searching = new Searching();
		sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		unsortedArr = [0, 1, 8, 4, 5, 6, 2, 3, 7,9];
	});

	describe("Simple Search", function() {
		it("should return -1 if no target is found", function() {
			var res = searching.simpleSearch(sortedArr, 20);
			expect(res.idx).toEqual(-1);
			expect(res.steps).toEqual(10);
		});

		it("should return the index of the target element when found", function() {
			var res = searching.simpleSearch(sortedArr, 5);
			expect(res.idx).toEqual(5);
			expect(res.steps).toEqual(6);
		});

		it("should be able to find the first element", function() {
			var res = searching.simpleSearch(sortedArr, 0);
			expect(res.idx).toEqual(0);
			expect(res.steps).toEqual(1);
		});

		it("should be able to find the last element", function() {
			var res = searching.simpleSearch(sortedArr, 9);
			expect(res.idx).toEqual(9);
			expect(res.steps).toEqual(10);
		});

		it("should be able to sort a sorted list", function() {
			var res = searching.simpleSearch(sortedArr, 8);
			expect(res.idx).toEqual(8);
			expect(res.steps).toEqual(9);
		});

		it("should be able to sort a sorted list", function() {
			var res = searching.simpleSearch(unsortedArr, 3);
			expect(res.idx).toEqual(7);
			expect(res.steps).toEqual(8);
		});
	});

	describe("Binary Search", function() {
		it("should return -1 if no target is found", function() {
			var res = searching.binarySearch(sortedArr, 20);
			expect(res.idx).toEqual(-1);
			expect(res.steps).toEqual(4);
		});

		it("should be able to sort a sorted list", function() {
			var res = searching.binarySearch(sortedArr, 8);
			expect(res.idx).toEqual(8);
			expect(res.steps).toEqual(3);
		});

		it("should be able to find the first element", function() {
			var res = searching.binarySearch(sortedArr, 0);
			expect(res.idx).toEqual(0);
			expect(res.steps).toEqual(3);
		});

		it("should be able to find the middle element", function() {
			var res = searching.binarySearch(sortedArr, 4);
			expect(res.idx).toEqual(4);
			expect(res.steps).toEqual(1);
		});

		it("should be able to find the last element", function() {
			var res = searching.binarySearch(sortedArr, 9);
			expect(res.idx).toEqual(9);
			expect(res.steps).toEqual(4);
		});

		it("should not be able to sort a sorted list", function() {
			var res = searching.binarySearch(unsortedArr, 3);
			expect(res.idx).not.toEqual(7);
			expect(res.idx).toEqual(-1);
		});
	});
});
