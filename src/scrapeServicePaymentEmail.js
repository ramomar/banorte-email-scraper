const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');
const extractAmount = require('./extractAmount');

function scrapeServicePaymentEmail(fields) {
  return {
    recordType: recordTypes.EXPENSE,
    emailType: emailTypes.SERVICE_PAYMENT,
    note: fields[4],
    operationDate: fields[6],
    applicationDate: fields[8],
    amount: extractAmount(fields[12]),
    channel: {
      type: fields[18]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeServicePaymentEmail);
