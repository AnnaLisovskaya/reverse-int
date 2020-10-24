module.exports = function reverse (n) {
  if (n < 0) {
        n = n*(-1);
    } else if (n % 10 === 0) {
        n = n / 10;
    }
    var i = n;
    var res = 0;
    while (i >= 0)  {
        
        if (i > 10) {
            res = (i % 10 + res) * 10;
        } else {
            res = i % 10 + res;
        }
        i = Math.trunc(i / 10);
    }
    return res;
}
