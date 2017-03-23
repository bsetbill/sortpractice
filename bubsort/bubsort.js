const swap = require('../swap')
function sort ({data = []} = {}) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      if (data[j] > data[j + 1]) {
        swap.swap(data, j, j + 1)
      }
    }
  }
  return data
}
exports.sort = sort
