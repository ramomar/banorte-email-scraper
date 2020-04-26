const scrapeChargeEmail = require('./scrapeChargeEmail');
const scrapeNipChangeEmail = require('./scrapeNipChangeEmail');
const scrapeAccountInfoEmail = require('./scrapeAccountInfoEmail');
const scrapeCashWithdrawalEmail = require('./scrapeCashWithdrawalEmail');
const scrapeDepositEmail = require('./scrapeDepositEmail');
const scrapeIdentificationEmail = require('./scrapeIdentificationEmail');
const scrapeSpeiIncomeEmail = require('./scrapeSpeiIncomeEmail');
const scrapeLimitModificationEmail = require('./scrapeLimitModificationEmail');
const scrapeFastTransferEmail = require('./scrapeFastTransferEmail');
const scrapePhoneRechargeEmail = require('./scrapePhoneRechargeEmail');
const emailTypes = require('./emailTypes');

const matchers = [
  [emailTypes.ACCOUNT_INFO, (rawHtml) => rawHtml.includes('Informacion de tu Cuenta')],
  [emailTypes.CASH_WITHDRAWAL, (rawHtml) => rawHtml.includes('RETIRO DE EFECTIVO')],
  [emailTypes.CHARGE, (rawHtml) => rawHtml.includes('COMPRA EN')],
  [emailTypes.DEPOSIT, (rawHtml => rawHtml.includes('Instrucción de Depósito'))],
  [emailTypes.FAST_TRANSFER, (rawHtml) => rawHtml.includes('Transferencias Rápidas')],
  [emailTypes.IDENTIFICATION, (rawHtml) => rawHtml.includes('Menú Telefónico Banorte') && rawHtml.includes('Identificacion')],
  [emailTypes.LIMIT_MODIFICATION, (rawHtml) => rawHtml.includes('Modificación de monto máximo acumulado por día')],
  [emailTypes.NIP_CHANGE, (rawHtml) => rawHtml.includes('CAMBIO DE NIP')],
  [emailTypes.PHONE_RECHARGE, (rawHtml) => rawHtml.includes('Compra de Tiempo Aire')],
  [emailTypes.SPEI_INCOME, (rawHtml) => rawHtml.includes('SPEI Recibido')]
];

function getMatches(rawHtml) {
  return matchers.reduce((acc, [emailType, matcher]) => {
    if (matcher(rawHtml)) {
      return [].concat(acc, emailType);
    }

    return acc;
  }, []);
}

function getEmailType(rawHtml) {
  const matches = getMatches(rawHtml);

  if (matches.length > 1) {
    throw new Error(`Multiple matches: ${matches.join(', ')}.`);
  }

  if (matches.length === 0) {
    return null;
  }

  return matches[0];
}

function scrapeBanorteEmail(rawHtml) {
  const emailType = getEmailType(rawHtml);

  switch (emailType) {
    case emailTypes.ACCOUNT_INFO:
      return scrapeAccountInfoEmail(rawHtml);
    case emailTypes.CASH_WITHDRAWAL:
      return scrapeCashWithdrawalEmail(rawHtml);
    case emailTypes.CHARGE:
      return scrapeChargeEmail(rawHtml);
    case emailTypes.DEPOSIT:
      return scrapeDepositEmail(rawHtml);
    case emailTypes.FAST_TRANSFER:
      return scrapeFastTransferEmail(rawHtml);
    case emailTypes.IDENTIFICATION:
      return scrapeIdentificationEmail(rawHtml);
    case emailTypes.LIMIT_MODIFICATION:
      return scrapeLimitModificationEmail(rawHtml);
    case emailTypes.NIP_CHANGE:
      return scrapeNipChangeEmail(rawHtml);
    case emailTypes.PHONE_RECHARGE:
      return scrapePhoneRechargeEmail(rawHtml);
    case emailTypes.SPEI_INCOME:
      return scrapeSpeiIncomeEmail(rawHtml);
    default:
      throw new Error('Scraper not implemented.');
  }
}

module.exports = scrapeBanorteEmail;
