const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');

function scrapeAccountInfoEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.ACCOUNT_INFO,
    note: fields[5],
    operationDate: fields[15]
  };
}

module.exports = makeBanorteEmailScraper(scrapeAccountInfoEmail);
