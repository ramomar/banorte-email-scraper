const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const recordTypes = require('./recordTypes');
const emailTypes = require('./emailTypes');

function scrapeIdentificationByPhoneEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.IDENTIFICATION_BY_PHONE,
    note: fields[5],
    operationDate: fields[17]
  };
}

module.exports = makeBanorteEmailScraper(scrapeIdentificationByPhoneEmail);
