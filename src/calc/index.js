let sum = (...val) => {
  let result = 0
  val.forEach(num => {
    result += Number(num)
  })
  return result
}

let sub = (...val) => {
  let result = val.splice(0, 1)
  val.forEach(num => {
    result = result - Number(num)
  })
  return result
}

let mult = (...val) => {
  let result = val.splice(0, 1)
  val.forEach(num => {
    result = result * Number(num)
  })
  return result
}

let div = (val1, val2) => {
  return Number(val2) === 0
    ? 'Não é possível realizar divisões por 0'
    : Number(val1) / Number(val2)
}

export { sum, sub, mult, div }
