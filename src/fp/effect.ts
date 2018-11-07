function Effect(f: any) {
  return {
    get: () => f,
    run: (x?: any) => f(x),
    map(g: any) {
      // compose function
      return Effect((x: any) => g(f(x)))
    },
  }
}

// test
function fZero() {
  console.log('some side effects .......')
  return 0
}

const increment = (x: number) => x + 1
const double = (x: number) => x * 2
const cube = (x: number) => x ** 3

const calculations = Effect(fZero)
  .map(increment)
  .map(double)
  .map(cube)

calculations.run() // 8
