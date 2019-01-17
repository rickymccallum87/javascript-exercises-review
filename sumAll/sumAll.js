const sumAll = function(start, end) {
    if (start < 0 || end < 0 ||
                typeof start !== "number" ||
                typeof end !== "number") {
        return 'ERROR';
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    let total = start;

    for (let i = start + 1; i <= end; i++) {
        total += i;
    }

    return total;
}

module.exports = sumAll
