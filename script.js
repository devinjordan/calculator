const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const evaluate = document.querySelector('#equals');
let selectedOperation = '';
let var1 = 0;
let var2 = 0;

const add = function(first, second) {
  return first + second;
}

const subtract = function(first, second) {
  return first - second;
}

const multiply = function(first, second) {
  return first * second;
}

const divide = function(first, second) {
  if (second == 0) {
    return undefined;
  }
  return first / second;
}

const operate = function(first, operator, second) {
  operator = selectedOperation;
  switch(operator) {
    case 'add':
      return add(first, second);
    case 'subtract':
      return subtract(first, second);
    case 'multiply':
      return multiply(first, second);
    case 'divide':
      return divide(first, second);
    default:
      return 0;
  }
}

// numbers.forEach(function (number) {
//   number.addEventListener('keyup', {

//   })
// })