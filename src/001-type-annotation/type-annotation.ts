// in most cases typescript will infer the type, the example below it's not necessary
// const nome: string = 'Alexandre'

// this is enough
const nome = 'Alexandre'

// types that occur infer:
// string
// number
// boolean
// symbol
// bigint

// Arrays
const numbersArray: Array<number> = [1, 2, 3]
const numbersArray2: number[] = [1, 2, 3]
const stringsArray: Array<string> = ['1', 'a', 'nome']
const stringsArray2: string[] = ['1', 'a', 'nome']

//Obejcts
const person: { name: string; age: number; adult?: boolean } = {
  name: 'Alexandre',
  age: 27,
}

// functions
function sum(x: number, y: number): number {
  return x + y
}

const result = sum(2, 2)

const sum2: (x: number, y: number) => number = (x, y) => x + y
