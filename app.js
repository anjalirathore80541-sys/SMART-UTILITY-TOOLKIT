const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger('Custom modules demonstration started.');

[2, 7, 10, 15].forEach((number) => {
  console.log(`${number} is ${isEven(number) ? 'even' : 'odd'}.`);
});

logger('Custom modules demonstration finished.');