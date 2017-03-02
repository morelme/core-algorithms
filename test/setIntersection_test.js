import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe.only('setIntersection()', function(){
  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('returns the intersection of two sets', function(){
    const firstSet = new Set([1, 2, 3, 4])
    const secondSet = new Set([2, 4, 6, 8])
    const resultingSet = new Set([2, 4])
    expect(setIntersection(firstSet, secondSet)).to.eql(resultingSet)
  })
})
