// Array<Type> or T[]
function multiply(...args: Array<number>) {
  return args.reduce((ac, value) => ac * value, 1)
}

function multiply2(...args: number[]) {
  return args.reduce((ac, value) => ac * value, 1)
}
