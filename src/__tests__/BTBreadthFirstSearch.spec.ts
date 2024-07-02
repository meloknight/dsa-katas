import bfs from '../katas/BTBreadthFirstSearch';
import { tree1 } from '../katas/trees';

test("Binary Tree: Breadth First Search", function () {
    expect(bfs(tree1, 45)).toEqual(true);
    expect(bfs(tree1, 7)).toEqual(true);
    expect(bfs(tree1, 69)).toEqual(false);
});