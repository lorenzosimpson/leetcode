var findMode = function(root, m={}) {
    helper = (node) => {
        if (!node) return;
        m[node.val] = ~~ m[node.val] + 1;
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    let max = Math.max.apply(null, Object.values(m));
    return Object.keys(m).filter(k => (m[k] === max));
};