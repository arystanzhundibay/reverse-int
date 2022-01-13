module.exports = function reverse (n) {
    let result = '';
    let strN = String(Math.abs(n));
    for (var i = 0; i < strN.length; i += 1) {
        result = strN[i] + result
    }
    return result;
}