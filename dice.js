const crypto = require('crypto');
const logger = require('./modules/logger');

function rollDice() {
  return crypto.randomInt(1, 7);
}

const count = Number(process.argv[2]) || 1;

if (count < 1 || !Number.isInteger(count)) {
  console.log('Usage: node dice.js [numberOfRolls]');
  process.exit(1);
}

logger(`Rolling ${count} dice.`);

for (let i = 1; i <= count; i++) {
  console.log(`Dice ${i} Rolled: ${rollDice()}`);
}