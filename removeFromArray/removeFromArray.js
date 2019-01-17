const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        thisArg = arguments[i]
        if (array.includes(thisArg)) {
            array.splice(array.indexOf(thisArg),1);
        }
    }
    return array;
}

module.exports = removeFromArray
