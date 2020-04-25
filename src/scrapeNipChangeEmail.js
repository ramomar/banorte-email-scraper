const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');

function scrapeNipChangeEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.NIP_CHANGE,
    note: fields[12],
    operationDate: fields[4],
    channel: {
      movementType: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
