const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');
const extractAmount = require('./extractAmount');

function scrapeCashWithdrawalEmail(fields) {
  return {
    recordType: recordTypes.EXPENSE,
    emailType: emailTypes.CASH_WITHDRAWAL,
    note: fields[3],
    operationDate: fields[5],
    applicationDate: fields[7],
    channel: {
      type: fields[21],
      details: {
        name: fields[19],
        location: fields[23]
      }
    },
    amount: extractAmount(fields[25])
  };
}

module.exports = makeBanorteEmailScraper(scrapeCashWithdrawalEmail);
