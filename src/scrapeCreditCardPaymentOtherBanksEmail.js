const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');
const extractAmount = require('./extractAmount');

function scrapeCreditCardPaymentOtherBanksEmail(fields) {
  return {
    recordType: recordTypes.EXPENSE,
    emailType: emailTypes.CREDIT_CARD_PAYMENT_OTHER_BANKS,
    note: [fields[4], fields[18], fields[14]].join(' | '),
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[22]),
    extraAmounts: [
      {
        fee: {
          amount: extractAmount(fields[26]),
          tax: extractAmount(fields[28])
        }
      }
    ],
    bank: fields[20],
    receiver: fields[16]
  };
}

module.exports = makeBanorteEmailScraper(scrapeCreditCardPaymentOtherBanksEmail);
