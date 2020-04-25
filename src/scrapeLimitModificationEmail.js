const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');

function scrapeLimitModificationEmail(fields) {
  return {
    movementType: 'account_operation',
    emailType: 'limit_modification',
    note: `${fields[5]} | Monto máximo acumulado por día: ${fields[13]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeLimitModificationEmail);
