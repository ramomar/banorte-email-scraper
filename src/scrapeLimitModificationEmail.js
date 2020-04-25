const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const movementTypes = require('./movementTypes');
const emailTypes = require('./emailTypes');

function scrapeLimitModificationEmail(fields) {
  return {
    movementType: movementTypes.ACCOUNT_OPERATION,
    emailType: emailTypes.LIMIT_MODIFICATION,
    note: `${fields[5]} | Monto máximo acumulado por día: ${fields[13]}`,
    operationDate: `${fields[7]} ${fields[9]}`
  };
}

module.exports = makeBanorteEmailScraper(scrapeLimitModificationEmail);
