// when a value is null or undefined, you will need to test for those values
// before using methods or properties on that value

let x
if (typeof x === 'undefined') x = 10
console.log(x * 2)

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}
