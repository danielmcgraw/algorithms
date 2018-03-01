List = function() {}

List.prototype.Node = function(val, nextPtr) {
	this.value = val;
	this.next = nextPtr;
	this.getValue = function() {
		return this.value;
	}
	this.setValue = function(val) {
		this.value = val
	}
	this.getNext = function() {
		return this.next;
	}
	this.setValue = function(nextPtr) {
		this.next = nextPtr
	}
}
