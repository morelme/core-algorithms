import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){
  let arr
  beforeEach(function() {
    arr = new Array();
    arr.push(34)
    arr.push(203)
    arr.push(3)
    arr.push(746)
    arr.push(200)
    arr.push(984)
    arr.push(198)
    arr.push(764)
    arr.push(9)
  });

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('sorts an array of numbers using the merge sort algorithm', function(){
    const sortedArr = [ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]
    expect(mergeSort(arr)).to.eql(sortedArr)
  })
})
