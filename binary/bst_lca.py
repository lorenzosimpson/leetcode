def lca(root, v1, v2):
    # idea is move towards both of them
    # when you're between the two nodes, break out of the loop
    # this would only work for bst
    while root != None:
        if root.info < v1 and root.info < v2:
            root = root.right
        elif root.info > v1 and root.info > v2:
            root = root.left
        else:
            break
    return root