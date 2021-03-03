module.exports = function reverse (n) {
    n = Math.abs(n);
    n = String(n);
    let arr = n.split('');
    arr = arr.reverse();
    arr = arr.join('');
    return +arr;
}
