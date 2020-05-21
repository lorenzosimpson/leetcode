var addToArrayForm = function(A, K) {
    let len = A.length
    let i = len - 1
    let cur = K
    let result = []
    
    while (i>=0 || cur > 0) {
        if (i>=0) {
            cur += A[i]
        }
        result.unshift(cur % 10);
        cur = parseInt(cur / 10)
        i--
    }
    return result
};