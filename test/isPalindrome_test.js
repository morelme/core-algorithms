import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe.only('isPalindrome()', function(){
  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

context('when the string passed in is a palindrome', function(){
  it('returns true', function(){
    expect(isPalindrome("A man, a plan, a canal. Panama")).to.equal(true)
  })
})

context('when the string passed in is not a palindrome', function(){
  it('returns false', function(){
    expect(isPalindrome('almostomla')).to.equal(false)
  })
})

})
