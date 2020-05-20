var climbStairs = function(n) {
    let previousIteration = 1, accumulator = 0, prevPrev;
    while (n >= 0) {
            prevPrev = previousIteration;
            previousIteration = accumulator;
            accumulator = prevPrev + accumulator;
            n--;
        }
        return accumulator;
};


var climbStairs = function(n, cache=null) {
    if (cache===null) {
        cache = {}
    }
    // recursive with memoization
    // use a hash map to store each recursive call's result?
    if (n <= 3) return n
    
    // look in the cache
    if (cache[n]) {
        return cache[n] 
    }
    let call = climbStairs(n-1, cache) + climbStairs(n-2, cache) // compute the value
    cache[n] = call // save it in the cache
    return call
};