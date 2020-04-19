const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeNipChangeEmail(fields) {
  return {
    type: 'account_operation',
    kind: 'nip_change',
    note: fields[12],
    operationDate: fields[4],
    channel: {
      type: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
