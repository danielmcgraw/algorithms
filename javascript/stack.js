class Stack {
	constructor() {
		this.arr = [];
	}

	push(item) {
			this.arr[this.arr.length] = item;
	}

	pop() {
		const item = this.arr[this.arr.length - 1]
		this.arr = this.arr.slice(0, -1);
		return item;
	}

	isEmpty() {
		return this.arr.length === 0;
	}
}
