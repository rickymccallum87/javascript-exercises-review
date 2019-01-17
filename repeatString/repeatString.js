const repeatString = function(original, count) {
    if (count < 0) return 'ERROR';
    let repeated = '';
    while (count > 0) {
        repeated += original;
        count--;
    }
    return repeated;
}

module.exports = repeatString
