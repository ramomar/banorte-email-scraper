const scrapeChargeEmail = require('./scrapeChargeEmail');
const scrapeNipChangeEmail = require('./scrapeNipChangeEmail');
const scrapeAccountInfoEmail = require('./scrapeAccountInfoEmail');
const scrapeCashWithdrawalEmail = require('./scrapeCashWithdrawalEmail');
const scrapeDepositEmail = require('./scrapeDepositEmail');
const scrapeIdentificationByPhoneEmail = require('./scrapeIdentificationByPhoneEmail');
const scrapeSpeiIncomeEmail = require('./scrapeSpeiIncomeEmail');
const scrapeLimitModificationEmail = require('./scrapeLimitModificationEmail');
const scrapeFastTransferEmail = require('./scrapeFastTransferEmail');
const scrapePhoneRechargeEmail = require('./scrapePhoneRechargeEmail');
const scrapeCancelDigitalDebitCardEmail = require('./scrapeCancelDigitalDebitCardEmail');
const emailTypes = require('./emailTypes');

const scrapers = Object.fromEntries([
  [emailTypes.ACCOUNT_INFO, scrapeAccountInfoEmail],
  [emailTypes.CASH_WITHDRAWAL, scrapeCashWithdrawalEmail],
  [emailTypes.CHARGE, scrapeChargeEmail],
  [emailTypes.DEPOSIT, scrapeDepositEmail],
  [emailTypes.FAST_TRANSFER, scrapeFastTransferEmail],
  [emailTypes.IDENTIFICATION_BY_PHONE, scrapeIdentificationByPhoneEmail],
  [emailTypes.LIMIT_MODIFICATION, scrapeLimitModificationEmail],
  [emailTypes.NIP_CHANGE, scrapeNipChangeEmail],
  [emailTypes.PHONE_RECHARGE, scrapePhoneRechargeEmail],
  [emailTypes.SPEI_INCOME, scrapeSpeiIncomeEmail],
  [emailTypes.CANCEL_DIGITAL_DEBIT_CARD, scrapeCancelDigitalDebitCardEmail]
]);

const matchers = [
  [emailTypes.ACCOUNT_INFO, (rawHtml) => rawHtml.includes('Informacion de tu Cuenta')],
  [emailTypes.CASH_WITHDRAWAL, (rawHtml) => rawHtml.includes('RETIRO DE EFECTIVO')],
  [emailTypes.CHARGE, (rawHtml) => rawHtml.includes('COMPRA EN')],
  [emailTypes.DEPOSIT, (rawHtml => rawHtml.includes('Instrucción de Depósito'))],
  [emailTypes.FAST_TRANSFER, (rawHtml) => rawHtml.includes('Transferencias Rápidas')],
  [emailTypes.IDENTIFICATION_BY_PHONE, (rawHtml) => rawHtml.includes('Menú Telefónico Banorte') && rawHtml.includes('Identificacion')],
  [emailTypes.LIMIT_MODIFICATION, (rawHtml) => rawHtml.includes('Modificación de monto máximo acumulado por día')],
  [emailTypes.NIP_CHANGE, (rawHtml) => rawHtml.includes('CAMBIO DE NIP')],
  [emailTypes.PHONE_RECHARGE, (rawHtml) => rawHtml.includes('Compra de Tiempo Aire')],
  [emailTypes.SPEI_INCOME, (rawHtml) => rawHtml.includes('SPEI Recibido')],
  [emailTypes.CANCEL_DIGITAL_DEBIT_CARD, (rawHtml) => rawHtml.includes('Cancelación de Tarjeta Digital de Débito')]
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

  const scraper = scrapers[emailType];

  if (!scraper) {
    throw new Error('Scraper not implemented.');
  }

  return scraper(rawHtml);
}

module.exports = scrapeBanorteEmail;
