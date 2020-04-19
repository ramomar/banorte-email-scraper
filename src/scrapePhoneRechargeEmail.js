const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const extractAmount = require('./extractAmount');

function scrapePhoneRechargeEmail(fields) {
  return {
    type: 'expense',
    kind: 'phone_recharge',
    note: fields[4],
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[18]),
    phone: /\d+/.exec(fields[14])[0]
  };
}

module.exports = makeBanorteEmailScraper(scrapePhoneRechargeEmail);
