const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');

function scrapeDigitalDebitCardActivatedEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED,
    note: `${fields[5]} | ${fields[11]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeDigitalDebitCardActivatedEmail);
