const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const extractAmount = require('./extractAmount');

function scrapeChargeEmail(fields) {
  return {
    movementType: 'expense',
    kind: 'charge',
    note: fields[4],
    operationDate: fields[6],
    applicationDate: fields[8],
    amount: extractAmount(fields[12]),
    channel: {
      kind: fields[16]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeChargeEmail);
