const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');
const extractAmount = require('./extractAmount');

function scrapeChargeEmail(fields) {
  return {
    recordType: recordTypes.EXPENSE,
    emailType: emailTypes.CHARGE,
    note: fields[4],
    operationDate: fields[6].replace(/\s+/g, ' '),
    applicationDate: fields[8],
    amount: extractAmount(fields[12]),
    channel: {
      type: fields[16]
    }
  };
}

module.exports = makeBanorteEmailScraper(scrapeChargeEmail);
