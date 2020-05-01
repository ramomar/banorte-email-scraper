const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeDigitalDebitCardBlockedEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.DIGITAL_DEBIT_CARD_BLOCKED,
    note: `${fields[5]} | ${fields[11]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeDigitalDebitCardBlockedEmail);
