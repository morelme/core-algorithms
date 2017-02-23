//time complexity: O(nlogn)

export default function mergeSort(arr) {
  const arrLength = arr.length
  if(arrLength < 2){
    return arr
  }

  let middle = parseInt(arrLength/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arrLength)

  return merge(mergeSort(left), mergeSort(right))
}

export function merge(left, right){
  let result = []
  while(left.length && right.length){
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while(left.length)
    result.push(left.shift())

  while (right.length)
    result.push(right.shift())

  return result
}
