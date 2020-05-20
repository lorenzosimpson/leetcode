var tribonacci = function(n, cache=null) {
    if (cache===null) cache = {}
    if (n===0) return 0
    if (n < 3) return 1
    if (cache[n]) return cache[n]
    let call = tribonacci(n-1, cache) + tribonacci(n-2, cache) + tribonacci(n-3, cache)
    cache[n] = call
    return call
};