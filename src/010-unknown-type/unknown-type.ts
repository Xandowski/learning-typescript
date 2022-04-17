// The unknown type represents any value. This is similar to the any type,
// but is safer because it’s not legal to do anything with an unknown value:

let n1: any

n1 = 100
n1 = 'Alexandre'
n1 = 10

const n2 = 8

console.log(n1 * n2)

let n3: unknown

n3 = 'Alexandre'
n3 = 5

if (typeof n3 === 'number') console.log(n3 + n2)
