var search = 2;

var count = dataset.reduce(function(n, val) {
    return n + (val === search);
}, 0);

console.log(count);