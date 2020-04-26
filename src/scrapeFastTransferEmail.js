const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');
const extractAmount = require('./extractAmount');

function scrapeFastTransferEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.FAST_TRANSFER,
    note: [fields[4], fields[32], fields[24]].join(' | '),
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[28]),
    bank: fields[26],
    receiver: fields[20]
  };
}

module.exports = makeBanorteEmailScraper(scrapeFastTransferEmail);
