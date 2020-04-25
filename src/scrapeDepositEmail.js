const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');
const extractAmount = require('./extractAmount');

function scrapeDepositEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.DEPOSIT,
    note: `${fields[4]} | ${fields[18]}`,
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[16]),
    bank: fields[14],
    receiver: fields[10]
  };
}

module.exports = makeBanorteEmailScraper(scrapeDepositEmail);
