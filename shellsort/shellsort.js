function sort ({data = []} = {}) {
  let j = -1
  for (let gap = parseInt(data.length / 2); gap > 0; gap = parseInt(gap / 2)) {
    for (let i = gap; i < data.length; i++) {
      let tmp = data[i]
      for (j = i; j >= gap && tmp < data[j - gap]; j -= gap) {
        data[j] = data[j - gap]
      }
      data[j] = tmp
    }
  }
  return data
}
exports.sort = sort
