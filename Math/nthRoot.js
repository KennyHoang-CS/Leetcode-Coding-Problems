
function nthRoot(x, n) {
    if(x > 0) {
        return Math.sqrt(x, n);
        }else {
        return 1 / Math.sqrt(x, n);
        }
}

console.log(nthRoot(7, 3));