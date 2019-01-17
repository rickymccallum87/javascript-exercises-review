const snakeCase = function(str) {
    let arr = Array.from(str);

    // check for WTF case
    if (arr.includes('.')
            && arr[arr.length - 1] !== '.') {
        translateWTF(arr);
    }

    // check for kebab-case
    if (arr.includes('-')) {
        translateKebab(arr);
    }

    // check for camelCase
    if (!arr.includes(' ')
            && str !== str.toLowerCase()
            && !arr.includes('_')) {
        translateCamel(arr);
    }

    removeChars([',','?','.'], arr);

    while (arr.includes(' ')) {
        arr.splice(arr.indexOf(' '), 1, '_');
    }

    return arr.join('').toLowerCase();
}

function translateCamel(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Capital letter
        if (arr[i] !== arr[i].toLowerCase()) {
            arr.splice(i, 0, '_');
            i++;
        }
    }
}

function translateKebab(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Dash
        if (arr[i] === '-') {
            arr.splice(i, 1, '_');
        }
    }
}

function translateWTF(arr) {
    for (let i = 0; i < arr.length; i++) {
        // dot dot 
        if (arr[i] === '.') {
            arr.splice(i, 2, '_');
            i++;
        }
    }
}

function removeChars(chars, arr) {
    for (let c = 0; c < chars.length; c++) {
        while (arr.includes(chars[c])) {
            arr.splice(arr.indexOf(chars[c]), 1);
        }
    }
}

module.exports = snakeCase
