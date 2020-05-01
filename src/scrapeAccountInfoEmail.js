const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeAccountInfoEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.ACCOUNT_INFO,
    note: fields[5],
    operationDate: fields[15]
  };
}

module.exports = makeBanorteEmailScraper(scrapeAccountInfoEmail);
