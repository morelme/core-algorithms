import { expect } from 'chai'
import factorial from '../src/factorial'

describe.only('factorial()', function(){
  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of a number', function(){
    expect(factorial(5)).to.eql(120)
  })
})
