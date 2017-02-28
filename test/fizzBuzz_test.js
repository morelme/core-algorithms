import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe.only('fizzBuzz()', function(){
  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of 100 elements', function(){
    expect(fizzBuzz().length).to.eql(100)
  })

  it('replaces multiples of three with \'Fizz\'', function(){
    expect(fizzBuzz()[2]).to.eql('Fizz')
  })

  it('replaces multiples of five with \'Buzz\'', function(){
    expect(fizzBuzz()[4]).to.eql('Buzz')
  })
  it('replaces multiples of three and five with \'FizzBuzz\'', function(){
    expect(fizzBuzz()[14]).to.eql('FizzBuzz')
  })

})
