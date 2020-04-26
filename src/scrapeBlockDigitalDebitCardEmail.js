const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');

function scrapeBlockDigitalDebitCardEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.BLOCK_DIGITAL_DEBIT_CARD,
    note: `${fields[5]} | ${fields[11]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeBlockDigitalDebitCardEmail);
