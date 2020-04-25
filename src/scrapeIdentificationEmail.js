const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');

function scrapeIdentificationEmail(fields) {
  return {
    movementType: 'account_operation',
    emailType: emailTypes.IDENTIFICATION,
    note: fields[5],
    operationDate: fields[17]
  };
}

module.exports = makeBanorteEmailScraper(scrapeIdentificationEmail);
