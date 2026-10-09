const [, , operation, a, b] = process.argv;

const num1 = Number(a);
const num2 = Number(b);

if (!operation || Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log(
    'Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>'
  );
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case 'add':
    result = num1 + num2;
    break;

  case 'subtract':
    result = num1 - num2;
    break;

  case 'multiply':
    result = num1 * num2;
    break;

  case 'divide':
    if (num2 === 0) {
      console.log('Error: Cannot divide by zero.');
      process.exit(1);
    }
    result = num1 / num2;
    break;

  default:
    console.log(
      'Invalid operation. Use add, subtract, multiply, or divide.'
    );
    process.exit(1);
}

console.log(`Result: ${result}`);