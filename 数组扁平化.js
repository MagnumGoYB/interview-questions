const arr = [[1, 2, 3], [4, 5], [6], [10, [11, 12]]]

console.log([].concat.apply([], arr))
console.log(arr.flat(Infinity))
