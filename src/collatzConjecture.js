export default function collatzConjecture(n){
  let collatzArr = []
  collatzArr.push(n)
  while(n > 1){
    if(n%2 === 0){
      n = Math.floor(n/2)
      collatzArr.push(n)
    } else {
      n = 3 * n + 1
      collatzArr.push(n)
    }
  }

  return collatzArr
}
