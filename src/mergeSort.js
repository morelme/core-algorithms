//time complexity: O(nlogn)

export default function mergeSort(arr) {
  if(arr.length < 2){
    return arr
  }

  let middle = parseInt(arr.length/2)
  const left = arr.splice(0, middle)
  const right = arr.splice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right){
  let sortedArray = []
  while(right.length && left.length){
    if(left[0] <= right[0]){
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  while(left.length){
    sortedArray.push(left.shift())
  }

  while(right.length){
    sortedArray.push(right.shift())
  }

  return sortedArray
}
