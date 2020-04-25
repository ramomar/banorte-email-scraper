const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const movementTypes = require('./movementTypes');
const emailTypes = require('./emailTypes');

function scrapeIdentificationEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.IDENTIFICATION,
    note: fields[5],
    operationDate: fields[17]
  };
}

module.exports = makeBanorteEmailScraper(scrapeIdentificationEmail);
