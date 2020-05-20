var fib = function(N, cache=null) {
    if (cache===null) cache = {}
    
    if (N<2) return N
    if (cache[N]) return cache[N]
    let call = fib(N-1, cache) + fib(N-2, cache)
    cache[N] = call
    return call
};