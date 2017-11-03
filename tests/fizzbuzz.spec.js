import { expect } from 'chai'
import { FizzBuzz } from '../src/FizzBuzz'

describe('Main Fizzbuzz', () => {

  it('Should return 0 if can be divided by 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0)
  })

  it('Should return Fizz if can be divided by 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
  })
  it('Should return Buzz if can be divided by 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz')
  })
  it('Should return 7 if cannot be divided by 3 or 5 or both ', () => {
    expect(FizzBuzz(7)).to.be.equal(7)
  })
  it('Should return FizzBuzz if can be divided by 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })
})
