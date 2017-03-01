export default function fibonacci(n){
  let fibonacciArr = []
  if(n === 0){
    fibonacciArr.push(n)
  }

  let fib = n + fibonacci(n - 1)

  fibonacciArr.push(fib)

  return fibonacciArr
}
