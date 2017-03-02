export default function(a, b){
  let unionSet = new Set()

  for(let i = 0; i < a.length; i ++){
    unionSet.add(a[i])
  }

  for(let i = 0; i < b.length; i++){
    if(!unionSet.has(b[i])){
      unionSet.add(b[i])
    }
  }

  return unionSet
}
