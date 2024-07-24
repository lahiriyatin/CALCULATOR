let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
  display.value += number;
}

function setOperation(operation) {
  if (display.value === '') return; // Ensure there's a first operand
  firstOperand = display.value;
  currentOperation = operation;
  display.value = '';
}

function calculate() {
  if (display.value === '') return; // Ensure there's a second operand
  secondOperand = display.value;
  let result = '';
  switch (currentOperation) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      if (parseFloat(secondOperand) === 0) {
        result = 'Error'; // Handle division by zero
      } else {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
      }
      break;
    default:
      return;
  }
  display.value = result;
  // Reset operands and operation
  firstOperand = '';
  secondOperand = '';
  currentOperation = '';
}

function clearDisplay() {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = '';
}

function clearLast() {
  if (display.value !== '') {
    display.value = display.value.slice(0, -1); // Remove the last character
  } else {
    currentOperation = '';
  }
}
