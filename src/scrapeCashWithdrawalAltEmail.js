const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');
const extractAmount = require('./extractAmount');

function scrapeCashWithdrawalAltEmail(fields) {
  return {
    recordType: recordTypes.EXPENSE,
    emailType: emailTypes.CASH_WITHDRAWAL_ALT,
    note: fields[4],
    operationDate: fields[6].replace(/\s+/g, ' '),
    applicationDate: fields[8],
    channel: {
      type: fields[18]
    },
    amount: extractAmount(fields[12])
  };
}

module.exports = makeBanorteEmailScraper(scrapeCashWithdrawalAltEmail);
