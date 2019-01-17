const caesar = function(string, shift) {
    const abcLower = Array.from('abcdefghijklmnopqrstuvwxyz');
    const abcUpper = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const array = Array.from(string);

    // Large positive shift factor
    while (shift > 25) {
        shift -= 26;
    }

    // Large negative shift factor
    while (shift < 0) {
        shift += 26;
    }

    let adjShift, letterPos;
    for (let i = 0; i < array.length; i++) {
        adjShift = shift;

        // Ignore punctuation
        if (array[i] === ','
                || array[i] === ' '
                || array[i] === '!') {
            continue;
        }

        letterPos = abcLower.indexOf(array[i].toLowerCase())

        // Wrap around positive
        if (letterPos + shift >= 26) {
            adjShift = -(26 - shift);
        }

        // Wrap around negative
        if (letterPos + shift < 0) {
            adjShift = 26 + shift;
        }

        // Shift
        if (array[i] === array[i].toLowerCase()) {
            array[i] = abcLower[abcLower.indexOf(array[i]) + adjShift];
        } else {
            array[i] = abcUpper[abcUpper.indexOf(array[i]) + adjShift];
        }
    }

    return array.join('');
}

module.exports = caesar
