export default function setIntersection(a, b){
  let intersectionSet = new Set()
  let longerSet
  let comparingSet

  if(a.length > b.length){
    longerSet = a
    comparingSet = b
  } else {
    longerSet = b
    comparingSet = a
  }

  for(let i = 0; i < longerSet.length; i++){
    if(comparingSet.has(longerSet[i])){
      intersectionSet.add(longerSet[i])
    }
  }

  return intersectionSet
}
