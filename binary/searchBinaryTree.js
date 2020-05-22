var searchBST = function(root, val) {
    // iterative with while loop
    
    while (root) {
        if (root.val === val) break;
        if (root.val < val) root = root.right
        else root = root.left
    } 
    return root
};