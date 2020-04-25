const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeIdentificationEmail(fields) {
  return {
    movementType: 'account_operation',
    kind: 'identification',
    note: fields[5],
    operationDate: fields[17]
  };
}

module.exports = makeBanorteEmailScraper(scrapeIdentificationEmail);
