const swap = require('../swap')
function sort ({data = []} = {}) {
  for (let i = 0; i < data.length; i++) {
    let minPoint = i
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minPoint]) {
        minPoint = j
      }
    }
    if (i !== minPoint) {
      swap.swap(data, i, minPoint)
    }
  }
  return data
}
exports.sort = sort
