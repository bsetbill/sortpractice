const bub = require('./bubsort/bubsort')
const insert = require('./insertsort/insertsort')
const sel = require('./selsort/selsort')
function random ({min = 0, max = 100, arrSize = 100} = {}) {
  const data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return data
}
function main () {
  const MAX = 100
  const MIN = 0
  const ARRSIZE = 100
  const data = random({min: MIN, max: MAX, arrSize: ARRSIZE})
  // const sortData = bub.sort({data: data})
  // const sortData = insert.sort({data: data})
  const sortData = sel.sort({data: data})
  console.log(sortData)
}

main()
