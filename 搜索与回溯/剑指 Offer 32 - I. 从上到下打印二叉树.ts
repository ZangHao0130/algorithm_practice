class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * 树的中序遍历 BFS
 */
function levelOrder(root: TreeNode | null): number[] {
    // 中序遍历
    const queue = [root];
    const result: number[] = [];
    while (queue.length) {
        const headTree = queue.shift();
        if (headTree) {
            result.push(headTree.val);
            queue.push(headTree.left);
            queue.push(headTree.right);
        }
    }
    return result;
};