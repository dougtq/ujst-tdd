// import { describe } from 'mocha'
// import chai from 'chai'

describe('Main', () => {
  let valores

  before(() => {})

  beforeEach(() => {
    valores = [1, 2, 3]
  })

  afterEach(() => {})

  after(() => {})

  it('Should have length of 4 when pushed another value', () => {
    console.log(valores.length)
    valores.push(4)
    // chai.expect()
  })

  it('Should have length of 2 when pushed another value', () => {
    valores.pop()

    console.log(valores.length)
    // chai.expect()
  })
})
