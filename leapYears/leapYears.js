const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
