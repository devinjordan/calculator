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
  const result = first / second;
  const remainder = first % second;
  if (remainder >= second / 2) {
    result++;
  }
  return result;
}

const operate = function(first, operator, second) {
  switch(operator) {
    case 'add':
      return add(first, second);
    case 'subtract':
      return subtract(first, second);
    case 'multiply':
      return multiply(first, second);
    case 'divide':
      return divide(first, second);
  }
}