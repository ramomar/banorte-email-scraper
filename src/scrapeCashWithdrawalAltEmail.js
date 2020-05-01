const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');
const extractAmount = require('./extractAmount');

function scrapeCashWithdrawalAltEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.CASH_WITHDRAWAL_ALT,
    note: fields[4],
    operationDate: fields[6],
    applicationDate: fields[8],
    channel: {
      type: fields[18]
    },
    amount: extractAmount(fields[12])
  };
}

module.exports = makeBanorteEmailScraper(scrapeCashWithdrawalAltEmail);
