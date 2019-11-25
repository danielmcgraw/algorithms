class Queue {
	constructor() {
		this.arr = [];
	}

	enqueue(item) {
			this.arr[this.arr.length] = item;
	}

	dequeue() {
		const item = this.arr[0]
		this.arr = this.arr.slice(1, this.arr.lenght);
		return item;
	}

	isEmpty() {
		return this.arr.length === 0;
	}
}
