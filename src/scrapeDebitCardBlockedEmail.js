const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeDebitCardBlockedEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.DEBIT_CARD_BLOCKED,
    note: `${fields[5]} | ${fields[11]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeDebitCardBlockedEmail);
