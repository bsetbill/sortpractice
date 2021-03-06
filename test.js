const bub = require('./bubsort/bubsort')
const insert = require('./insertsort/insertsort')
const sel = require('./selsort/selsort')
const quick = require('./quicksort/quicksort')
const heap = require('./heapsort/heapsort')
const shell = require('./shellsort/shellsort')
const merge = require('./mergesort/mergesort')
const shake = require('./shakesort/shakesort')
const radix = require('./radixsort/radixsort')
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
  // const sortData = sel.sort({data: data})
  // const sortData = quick.sort({data: data, rightPoint: data.length - 1, leftPoint: 0})
  // const sortData = heap.sort({data: data})
  // const sortData = shell.sort({data: data})
  // const sortData = merge.sort({data: data})
  // const sortData = shake.sort({data: data})
  const sortData = radix.sort({data: data, max: MAX})
  console.log(sortData)
}

main()
