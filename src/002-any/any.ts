// not recomended
// this will not show as a error
// recomended: be more specific
function showMessage(msg: any) {
  return msg
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage('Hello'))
console.log(showMessage(1))
