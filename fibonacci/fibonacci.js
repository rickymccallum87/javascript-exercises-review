const fibonacci = function(m) {
    if (m < 0) return 'OOPS';
    let fib = [1,1];
    m = +m;
    for (let i = 2; i < m; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[m-1];
}

module.exports = fibonacci
