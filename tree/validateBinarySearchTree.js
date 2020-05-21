var isValidBST = function(root, min=-Infinity, max=Infinity) {
    // base case is root is null, no more nodes to explore
     if (root === null) return true
     
     if (root.val <= min || root.val >= max) return false
     
     // make sure both the left and right subtrees return true
     return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
 };