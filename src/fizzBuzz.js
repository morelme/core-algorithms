export default function fizzBuzz () {

  const arr = []
  for(let i = 1; i <= 100; i++){
    arr.push(i)
  }

  for(let j = 0; j < 100; j++){
    if(arr[j]%5 === 0 && arr[j]%3 === 0){
      arr[j] = 'FizzBuzz'
    }
    if(arr[j]%3 === 0){
      arr[j] = 'Fizz'
    }
    if(arr[j]%5 === 0){
      arr[j] = 'Buzz'
    }
  }

  return arr
}
