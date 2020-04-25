const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeNipChangeEmail(fields) {
  return {
    movementType: 'account_operation',
    kind: 'nip_change',
    note: fields[12],
    operationDate: fields[4],
    channel: {
      movementType: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
