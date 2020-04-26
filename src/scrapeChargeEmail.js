const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');
const extractAmount = require('./extractAmount');

function scrapeChargeEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.CHARGE,
    note: fields[4],
    operationDate: fields[6],
    applicationDate: fields[8],
    amount: extractAmount(fields[12]),
    channel: {
      type: fields[16]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeChargeEmail);
