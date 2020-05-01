const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeDigitalDebitCardActivatedEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED,
    note: `${fields[5]} | ${fields[11]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeDigitalDebitCardActivatedEmail);
