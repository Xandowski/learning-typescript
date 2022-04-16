// once the type was infer, is no possible to change
const objectA = {
  keyA: 'Value A',
  keyB: 'Value B',
}
// this is not possible:
// objectA.keyC = 'New Value'

// this is ok:
objectA.keyA = 'New value'

// another way, but it's not recommend:
const objectB: {
  keyA: string
  keyB: string
  [key: string]: unknown
} = {
  keyA: 'Value A',
  keyB: 'Value B',
}

// now this is allowed
objectB.keyC = 'New value'
