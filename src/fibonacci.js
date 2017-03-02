export default function fibonacci(n){
  let fibonacciArr = []
  fibonacciArr[0] = 0
  fibonacciArr[1] = 1
  for(let i = 2; i < n; i ++){
    fibonacciArr[i] = fibonacciArr[i - 2] + fibonacciArr[i -1]
  }
  return fibonacciArr
}
