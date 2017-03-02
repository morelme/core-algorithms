import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){
  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns the union of two sets', function(){
    const firstSet = new Set([1, 2, 3, 4])
    const secondSet = new Set([2, 4, 6, 8])
    const resultingSet = new Set([1, 2, 3, 4, 6, 8])
    expect(setUnion(firstSet, secondSet)).to.eql(resultingSet)
  })
})
