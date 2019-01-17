const reverseString = function(fString) {
    fArray = fString.split('');
    let rArray = [];
    rArray = fArray.reverse();
    // while (fArray.length > 0) {
    //     rArray.push(fArray.pop());
    // }
    return rArray.join('');
}

module.exports = reverseString
