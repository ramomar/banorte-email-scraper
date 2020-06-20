const makeBanorteSpeiEmailScraper = require('./makeBanorteSpeiEmailScraper');
const emailTypes = require('./emailTypes');
const recordTypes = require('./recordTypes');

function scrapeSpeiIncomeEmail(fields) {
  const sanitizedNote = fields[6]
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ');

  const operationData = sanitizedNote.split(' ');

  return {
    recordType: recordTypes.INCOME,
    emailType: emailTypes.SPEI_INCOME,
    note: sanitizedNote,
    operationDate: `${operationData[10]} ${operationData[13]}`,
    amount: parseFloat(operationData[7].replace(',', '')).toFixed(2)
  };
}

module.exports = makeBanorteSpeiEmailScraper(scrapeSpeiIncomeEmail);
