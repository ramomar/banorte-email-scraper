const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const extractAmount = require('./extractAmount');

function scrapeCashWithdrawalEmail(fields) {
  return {
    movementType: 'expense',
    emailType: 'cash_withdrawal',
    note: fields[3],
    operationDate: fields[5],
    applicationDate: fields[7],
    channel: {
      emailType: fields[21],
      details: {
        name: fields[19],
        location: fields[23]
      }
    },
    amount: extractAmount(fields[25])
  };
}

module.exports = makeBanorteEmailScraper(scrapeCashWithdrawalEmail);
