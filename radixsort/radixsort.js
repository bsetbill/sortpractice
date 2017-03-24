function sort ({data = [], max = 100} = {}) {
  let radix = 1
  const bucket = new Array(data.length)
  const count = new Array(data.length)
  arrInit(bucket, count)
  while (radix <= max) {
    for (let i = 0; i < data.length; i++) {
      let LSD = parseInt((data[i] / radix)) % 10
      bucket[LSD][count[LSD]] = data[i]
      count[LSD] += 1
    }
    radix *= 10
    let dataCon = 0
    for (let i = 0; i < data.length; i++) {
      if (count[i] !== 0) {
        for (let j = 0; j < count[i]; j++) {
          data[dataCon] = bucket[i][j]
          dataCon += 1
        }
      }
      count[i] = 0
    }
  }
  return data
}
function arrInit (bucket, count) {
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = []
    count[i] = 0
  }
}
exports.sort = sort
