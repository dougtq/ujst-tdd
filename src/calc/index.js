module.exports = {
  sum (...val) {
    let result = 0
    val.forEach(num => {
      result += Number(num)
    })
    return result
  },
  sub (...val) {
    let result = val.splice(0, 1)
    val.forEach(num => {
      result = result - Number(num)
    })
    return result
  },
  mult (...val) {
    let result = val.splice(0, 1)
    val.forEach(num => {
      result = result * Number(num)
    })
    return result
  },
  div (val1, val2) {
    return Number(val2) === 0
      ? 'Não é possível realizar divisões por 0'
      : Number(val1) / Number(val2)
  }
}
