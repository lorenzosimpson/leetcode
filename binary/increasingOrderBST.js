var increasingBST = function(root) {
    let nodes = []
    function helper(root) {
        if (root) {
            helper(root.left)
            nodes.push(root.val)
            helper(root.right)
        }
    }
    
    helper(root)
    
    let treeNode = new TreeNode(0)
    let curr = treeNode
    for (let i=0; i<nodes.length; i++) {
        curr.right = new TreeNode(nodes[i])
        curr = curr.right
    }
    return treeNode.right
};