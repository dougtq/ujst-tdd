const FizzBuzz = num => {
  let resposta = num

  if (num === 0) return num

  if (num % 3 === 0) resposta = 'Fizz'

  if (num % 5 === 0) resposta = 'Buzz'

  if (num % 3 === 0 && num % 5 === 0) resposta = 'FizzBuzz'

  return resposta
}

export { FizzBuzz }
