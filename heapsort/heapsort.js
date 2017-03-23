const swap = require('../swap')
function sort ({data = []} = {}) {
  for (let i = Math.floor(data.length / 2) - 1; i >= 0; i--) {
    heap(data, i, data.length)
  }
  for (let i = data.length - 1; i > 0; i--) {
    swap.swap(data, 0, i)
    heap(data, 0, i)
  }
  return data
}
function heap (data, root, length) {
  let leftNode = root * 2 + 1
  let rightNode = root * 2 + 2
  let maxNode = -1
  if (rightNode < length && (data[rightNode] > data[root])) {
    maxNode = rightNode
  } else {
    maxNode = root
  }
  if (leftNode < length && (data[leftNode] > data[maxNode])) {
    maxNode = leftNode
  }
  if (maxNode !== root) {
    swap.swap(data, root, maxNode)
    heap(data, maxNode, length)
  }
}
exports.sort = sort
