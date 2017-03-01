import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){
  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('sorts an array of numbers using the merge sort algorithm', function(){
    const unsortedArray = [ 34, 203, 3, 746, 200, 984, 198, 764, 9]
    const sortedArr = [ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]
    expect(mergeSort(unsortedArray)).to.eql(sortedArr)
  })
})
