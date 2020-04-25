const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeNipChangeEmail(fields) {
  return {
    movementType: 'account_operation',
    emailType: 'nip_change',
    note: fields[12],
    operationDate: fields[4],
    channel: {
      movementType: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
