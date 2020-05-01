const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const recordTypes = require('./recordTypes');
const emailTypes = require('./emailTypes');

function scrapeLimitModificationEmail(fields) {
  return {
    recordType: recordTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.LIMIT_MODIFICATION,
    note: `${fields[5]} | Monto máximo acumulado por día: ${fields[13]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeLimitModificationEmail);
