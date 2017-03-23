const swap = require('../swap')
function sort ({data = [], rightPoint = data.length - 1, leftPoint = 0} = {}) {
  const mid = parseInt((rightPoint + leftPoint) / 2)
  let i = leftPoint
  let j = rightPoint
  while (i <= j) {
    while (data[i] < data[mid]) {
      i += 1
    }
    while (data[j] > data[mid]) {
      j -= 1
    }
    if (i <= j) {
      swap.swap(data, i, j)
      i += 1
      j -= 1
    }
  }
  if (leftPoint < j) {
    sort({data: data, rightPoint: j, leftPoint: leftPoint})
  }
  if (i < rightPoint) {
    sort({data: data, rightPoint: rightPoint, leftPoint: i})
  }
  return data
}
exports.sort = sort
