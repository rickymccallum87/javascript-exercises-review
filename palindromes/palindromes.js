const palindromes = function(str) {
    str = str.toLowerCase();
    let arr = Array.from(str);

    removeChars(['!',' ','.',','], arr);

    let opp;
    const half = Math.floor(str.length / 2);
    for (let i = 0; i < half; i++) {
        opp = arr.length - (i + 1);
        if (arr[i] !== arr[opp]) {
            return false;
        }
    }
    return true;
}

function removeChars(chars, arr) {
    for (let c = 0; c < chars.length; c++) {
        while (arr.includes(chars[c])) {
            arr.splice(arr.indexOf(chars[c]), 1);
        }
    }
}

module.exports = palindromes
