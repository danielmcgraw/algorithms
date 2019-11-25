const bfs = (graph, root, matchFn) => {
	let queue = [[root, 0, null]];
	let visited = [root];
	let parents = {[root]: null};

	while (queue.length) {
		let item = queue.shift();
		let isMatch = matchFn(item[0]);
		if (isMatch) {
			path = [];
			curr = item[0]
			while (curr) {
				path.unshift(curr);
				curr = parents[curr];
			}
			return path;
		}
		unvisitedChildren = graph[item[0]].filter(x => !visited.includes(x))
		queue = [...queue, ...unvisitedChildren.map(x => [x, item[1] + 1])];
		visited = [...visited, ...graph[item[0]]];
		unvisitedChildren.forEach(x => {
			parents[x] = item[0];
		});
	}
	return [];
}

// graph = {'dan': ['tom'], 'tom': ['kevin', 'kelly'], 'kelly': ['tiff'], 'kevin': ['kelly', 'tiff'], 'tiff': ['dan'], 'carl': ['tiff']}
// > bfs(graph, 'dan', (x) => x === 'carl')
// < []
//
// > bfs(graph, 'dan', (x) => x === 'kelly')
// < ["dan", "tom", "kelly"]
//
// > bfs(graph, 'carl', (x) => x === 'kelly')
// < ["carl", "tiff", "dan", "tom", "kelly"]
