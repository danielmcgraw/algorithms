const bfs = (graph, root, matchFn) => {
	let queue = [[root, 0]];
	let visited = [root];

	while (queue.length) {
		let item = queue.shift();
		let isMatch = matchFn(item[0]);
		if (isMatch) return item[1];
		queue = [...queue, ...graph[item[0]].filter(x => !visited.includes(x)).map(x => [x, item[1] + 1])];
		visited = [...visited, ...graph[item[0]]];
	}
	return -1
}

// graph = {'dan': ['tom'], 'tom': ['kevin', 'kelly'], 'kelly': ['tiff'], 'kevin': ['kelly', 'tiff'], 'tiff': ['dan'], 'carl': ['tiff']}
// > bfs(graph, 'dan', (x) => x === 'carl')
// < -1
//
// > bfs(graph, 'dan', (x) => x === 'kelly')
// < 2
//
// > bfs(graph, 'carl', (x) => x === 'kelly')
// < 4
