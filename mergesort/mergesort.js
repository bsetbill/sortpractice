function sort ({data = []} = {}) {
  if (data.length > 1) {
    let rightData = []
    let leftData = []
    const mid = parseInt(data.length / 2)
    for (let i = 0; i < mid; i++) {
      leftData[i] = data[i]
    }
    for (let j = mid; j < data.length; j++) {
      rightData[j - mid] = data[j]
    }
    leftData = sort({data: leftData})
    rightData = sort({data: rightData})
    return merge(leftData, rightData)
  }
  return data
}
function merge (leftData, rightData) {
  let leftCon = 0
  let rightCon = 0
  const sortData = []
  for (let i = 0; i < (leftData.length + rightData.length); i++) {
    if (leftCon === leftData.length) {
      sortData[i] = rightData[rightCon]
      rightCon += 1
    } else if (rightCon === rightData.length) {
      sortData[i] = leftData[leftCon]
      leftCon += 1
    } else if (leftData[leftCon] < rightData[rightCon]) {
      sortData[i] = leftData[leftCon]
      leftCon += 1
    } else {
      sortData[i] = rightData[rightCon]
      rightCon += 1
    }
  }
  return sortData
}
exports.sort = sort
