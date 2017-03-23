function sort ({data = []} = {}) {
  let j = -1
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i]
    for (j = i; j > 0 && tmp < data[j - 1]; j--) {
      data[j] = data[j - 1]
    }
    data[j] = tmp
  }
  return data
}
exports.sort = sort
