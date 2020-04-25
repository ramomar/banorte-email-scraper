const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');

function scrapeAccountInfoEmail(fields) {
  return {
    movementType: 'account_operation',
    emailType: emailTypes.ACCOUNT_INFO,
    note: fields[5],
    operationDate: fields[15]
  };
}

module.exports = makeBanorteEmailScraper(scrapeAccountInfoEmail);
