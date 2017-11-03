// import { describe } from 'mocha'
import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/calc'

describe('Main Calc', () => {
  describe('Smoke Tests', () => {
    // it('should exist the calculator lib', () => {
    //   expect(calculator).to.exist
    // })

    it('should exist method sum', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exist method sub', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exist method div', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })

    it('should exist method multiply', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })
  })

  describe('functional tests', () => {
    it('Expect sum(2,2) to return 4', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })

    it('Expect sub(2,10) to return -8', () => {
      expect(sub(2, 10)).to.be.equal(-8)
    })

    it('Expect mult(2,2) to return 4', () => {
      expect(mult(2, 2)).to.be.equal(4)
    })

    it('Expect div(10,2) to return 5', () => {
      expect(div(10, 2)).to.be.equal(5)
    })

    it('Expect div(10,0) to return { Não é possível realizar divisões por 0 } when divided by 0', () => {
      expect(div(10, 0)).to.be.equal('Não é possível realizar divisões por 0')
    })
  })
})
