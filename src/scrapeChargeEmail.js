const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const extractAmount = require('./extractAmount');

function scrapeChargeEmail(fields) {
  return {
    movementType: 'expense',
    emailType: emailTypes.CHARGE,
    note: fields[4],
    operationDate: fields[6],
    applicationDate: fields[8],
    amount: extractAmount(fields[12]),
    channel: {
      emailType: fields[16]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeChargeEmail);
