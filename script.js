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

numbers.forEach(function (number) {
  number.onclick = function () {
    if (display.textContent == 0) {
      display.textContent = number.textContent;
      return;
    }
    display.append(number.textContent);
  }
});

operators.forEach(function (operator) {
  operator.onclick = function () {
    if (selectedOperation == '') {
      var1 = display.textContent;
      display.textContent = 0;
      selectedOperation = operator.id;
    } else {
      selectedOperation = operator.id;
    }
  }
});

evaluate.addEventListener('click', () => {
  var2 = display.textContent;
  display.textContent = operate(var1, selectedOperation, var2);
});

// numbers.forEach(function (number) {
//   number.addEventListener('keyup', {

//   })
// })