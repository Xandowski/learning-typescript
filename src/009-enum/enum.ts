// Enums allow a developer to define a set of named constants.
// Using enums can make it easier to document intent, or create a set of
// distinct cases. TypeScript provides both numeric and string-based enums.

enum Colors {
  red,
  blue,
  yellow,
}

console.log(Colors.red) // 0
console.log(Colors[0]) // red

// we can change the values:

enum Colors2 {
  red = 10,
  blue = 20,
  yellow = 30,
}

console.log(Colors2.red) // 10
console.log(Colors2[10]) // red

// the values can be a string, but if you have more bellow we need to initialize:

enum Colors3 {
  red = 100,
  blue = 200,
  yellow = 300,
  green = 'GREEN',
  // the next value must be a number
  purple = 400,
}

console.log(Colors3.red) // 10
console.log(Colors3[100]) // red
console.log(Colors3.green) // GREEN

// if two enums have the same name, will merge:

enum Colors4 {
  red = 1,
  blue = 2,
  yellow = 3,
}

enum Colors4 {
  green = 4,
  purple = 5,
  gray = 6,
}

console.log(Colors4)
