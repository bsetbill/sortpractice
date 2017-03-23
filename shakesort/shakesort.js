const swap = require('../swap')
function sort ({data = []} = {}) {
  let leftPoint = 0
  let rightPoint = data.length - 1
  let turnPoint = -1
  while (leftPoint < rightPoint) {
    for (let i = leftPoint; i < rightPoint; i++) {
      if (data[i] > data[i + 1]) {
        swap.swap(data, i, i + 1)
        turnPoint = i
      }
    }
    rightPoint = turnPoint
    for (let j = rightPoint; j > leftPoint; j--) {
      if (data[j] < data[j - 1]) {
        swap.swap(data, j, j - 1)
        turnPoint = j
      }
    }
    leftPoint = turnPoint
  }
  return data
}
exports.sort = sort
