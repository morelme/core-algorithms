//time complexity: O(nlogn)

export default function mergeSort(arr) {
  const arrLength = arr.length
  if(arrLength < 2){
    return arr
  }

  let middle = parseInt(arrLength/2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle, arrLength)

  return merge(mergeSort(left), mergeSort(right))
}

export function merge(left, right){
  let result = []
  while(left.length && right.length){
    if (left[0]<= right[0]) {
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


  //1. continuously split the list in halves until each list has one element in them
  //2.repeatedly merge pairs of list using the comparison algorithm we used before
