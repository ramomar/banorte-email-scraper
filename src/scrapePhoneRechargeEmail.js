const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const extractAmount = require('./extractAmount');

function scrapePhoneRechargeEmail(fields) {
  return {
    movementType: 'expense',
    emailType: emailTypes.PHONE_RECHARGE,
    note: fields[4],
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[18]),
    phone: /\d+/.exec(fields[14])[0]
  };
}

module.exports = makeBanorteEmailScraper(scrapePhoneRechargeEmail);
