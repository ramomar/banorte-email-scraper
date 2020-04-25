const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeAccountInfoEmail(fields) {
  return {
    movementType: 'account_operation',
    kind: 'account_info',
    note: fields[5],
    operationDate: fields[15]
  };
}

module.exports = makeBanorteEmailScraper(scrapeAccountInfoEmail);
