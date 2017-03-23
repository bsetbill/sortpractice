function swap (data, i, j) {
  let tmp = data[i]
  data[i] = data[j]
  data[j] = tmp
}
exports.swap = swap
