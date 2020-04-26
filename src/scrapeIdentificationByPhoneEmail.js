const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const movementTypes = require('./movementTypes');
const emailTypes = require('./emailTypes');

function scrapeIdentificationByPhoneEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.IDENTIFICATION_BY_PHONE,
    note: fields[5],
    operationDate: fields[17]
  };
}

module.exports = makeBanorteEmailScraper(scrapeIdentificationByPhoneEmail);
