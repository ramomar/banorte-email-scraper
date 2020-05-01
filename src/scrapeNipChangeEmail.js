const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeNipChangeEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.NIP_CHANGE,
    note: fields[12],
    operationDate: fields[4],
    channel: {
      type: fields[14]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeNipChangeEmail);
