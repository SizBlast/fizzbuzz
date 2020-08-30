for (x=1;x<101;x++) {
  if (x % 15 === 0) {
    console.log('FizzBuzz')
    continue
  }
  if (x % 5 === 0) {
    console.log('Buzz')
    continue
  }
  if (x % 3 === 0) {
    console.log('Fizz')
    continue
  }
  console.log(x)
}
