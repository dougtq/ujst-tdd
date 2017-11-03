// import { describe } from 'mocha'
let expect = require('chai').expect
let calculator = require('../src/calc/')

describe('Calc', () => {
  describe('Smoke Tests', () => {
    it('should exist the calculator lib', () => {
      expect(calculator).to.exist
    })

    it('should exist method sum', () => {
      expect(calculator.sum).to.exist
      expect(calculator.sum).to.be.a('function')
    })

    it('should exist method sub', () => {
      expect(calculator.sub).to.exist
      expect(calculator.sub).to.be.a('function')
    })

    it('should exist method div', () => {
      expect(calculator.div).to.exist
      expect(calculator.div).to.be.a('function')
    })

    it('should exist method multiply', () => {
      expect(calculator.mult).to.exist
      expect(calculator.mult).to.be.a('function')
    })
  })

  describe('functional tests', () => {
    it('Expect sum(2,2) to return 4', () => {
      expect(calculator.sum(2, 2)).to.be.equal(4)
    })

    it('Expect sub(2,10) to return -8', () => {
      expect(calculator.sub(2, 10)).to.be.equal(-8)
    })

    it('Expect mult(2,2) to return 4', () => {
      expect(calculator.mult(2, 2)).to.be.equal(4)
    })

    it('Expect div(10,2) to return 5', () => {
      expect(calculator.div(10, 2)).to.be.equal(5)
    })

    it('Expect div(10,0) to return { Não é possível realizar divisões por 0 } when divided by 0', () => {
      expect(calculator.div(10, 0)).to.be.equal('Não é possível realizar divisões por 0')
    })
  })
})
