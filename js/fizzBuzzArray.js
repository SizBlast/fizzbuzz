const fizzBuzz = []

for (x=1;x<101;x++) {
  if (x % 15 === 0) {
    fizzBuzz.push('FizzBuzz')
    continue
  }
  if (x % 5 === 0) {
    fizzBuzz.push('Buzz')
    continue
  }
  if (x % 3 === 0) {
    fizzBuzz.push('Fizz')
    continue
  }
  fizzBuzz.push(x)
}

console.log(fizzBuzz)
