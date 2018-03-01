describe("Lists", function() {
	describe("Node", function() {
		beforeEach(function() {
			searching = new Searching();
			sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			unsortedArr = [0, 1, 8, 4, 5, 6, 2, 3, 7,9];
		});

		it("should create a Node", function() {
			var res = .binarySearch(sortedArr, 20);
			expect(res.idx).toEqual(-1);
			expect(res.steps).toEqual(4);
		});
	});
});
