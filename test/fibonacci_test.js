import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){
  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns an array of Fibonacci numbers to the nth position', function(){
    const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    expect(fibonacci(10)).to.eql(fibonacciSequence)
  })
})
