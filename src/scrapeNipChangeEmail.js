const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');

function scrapeNipChangeEmail(fields) {
  return {
    movementType: 'account_operation',
    emailType: emailTypes.NIP_CHANGE,
    note: fields[12],
    operationDate: fields[4],
    channel: {
      movementType: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
