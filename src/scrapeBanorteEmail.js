const scrapeChargeEmail = require('./scrapeChargeEmail');
const scrapeNipChangeEmail = require('./scrapeNipChangeEmail');
const scrapeAccountInfoEmail = require('./scrapeAccountInfoEmail');
const scrapeCashWithdrawalEmail = require('./scrapeCashWithdrawalEmail');
const scrapeCashWithdrawalAltEmail = require('./scrapeCashWithdrawalAltEmail');
const scrapeDepositEmail = require('./scrapeDepositEmail');
const scrapeIdentificationByPhoneEmail = require('./scrapeIdentificationByPhoneEmail');
const scrapeSpeiIncomeEmail = require('./scrapeSpeiIncomeEmail');
const scrapeLimitModificationEmail = require('./scrapeLimitModificationEmail');
const scrapeFastTransferEmail = require('./scrapeFastTransferEmail');
const scrapePhoneRechargeEmail = require('./scrapePhoneRechargeEmail');
const scrapeDigitalDebitCardCancelledEmail = require('./scrapeDigitalDebitCardCancelledEmail');
const scrapeDigitalDebitCardActivatedEmail = require('./scrapeDigitalDebitCardActivatedEmail');
const scrapeDigitalDebitCardBlockedEmail = require('./scrapeDigitalDebitCardBlockedEmail');
const scrapeDebitCardBlockedEmail = require('./scrapeDebitCardBlockedEmail');
const scrapeSpeiDevolutionEmail = require('./scrapeSpeiDevolutionEmail');
const scrapeServicePaymentEmail = require('./scrapeServicePaymentEmail');
const scrapeCreditCardPaymentOtherBanksEmail = require('./scrapeCreditCardPaymentOtherBanksEmail');
const emailTypes = require('./emailTypes');

const scrapers = Object.fromEntries([
  [emailTypes.ACCOUNT_INFO, scrapeAccountInfoEmail],
  [emailTypes.CASH_WITHDRAWAL, scrapeCashWithdrawalEmail],
  [emailTypes.CASH_WITHDRAWAL_ALT, scrapeCashWithdrawalAltEmail],
  [emailTypes.CHARGE, scrapeChargeEmail],
  [emailTypes.DEPOSIT, scrapeDepositEmail],
  [emailTypes.FAST_TRANSFER, scrapeFastTransferEmail],
  [emailTypes.IDENTIFICATION_BY_PHONE, scrapeIdentificationByPhoneEmail],
  [emailTypes.LIMIT_MODIFICATION, scrapeLimitModificationEmail],
  [emailTypes.NIP_CHANGE, scrapeNipChangeEmail],
  [emailTypes.PHONE_RECHARGE, scrapePhoneRechargeEmail],
  [emailTypes.SPEI_INCOME, scrapeSpeiIncomeEmail],
  [emailTypes.DIGITAL_DEBIT_CARD_CANCELLED, scrapeDigitalDebitCardCancelledEmail],
  [emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED, scrapeDigitalDebitCardActivatedEmail],
  [emailTypes.DIGITAL_DEBIT_CARD_BLOCKED, scrapeDigitalDebitCardBlockedEmail],
  [emailTypes.DEBIT_CARD_BLOCKED, scrapeDebitCardBlockedEmail],
  [emailTypes.SPEI_DEVOLUTION, scrapeSpeiDevolutionEmail],
  [emailTypes.SERVICE_PAYMENT, scrapeServicePaymentEmail],
  [emailTypes.CREDIT_CARD_PAYMENT_OTHER_BANKS, scrapeCreditCardPaymentOtherBanksEmail]
]);

const matchers = [
  [emailTypes.ACCOUNT_INFO, (rawHtml) => rawHtml.includes('Informacion de tu Cuenta')],
  [emailTypes.CASH_WITHDRAWAL, (rawHtml) => rawHtml.includes('RETIRO DE EFECTIVO')],
  [emailTypes.CASH_WITHDRAWAL_ALT, (rawHtml) => rawHtml.includes('DISPOSICION DE EFECTIVO')],
  [emailTypes.CHARGE, (rawHtml) => rawHtml.includes('COMPRA EN')],
  [emailTypes.DEPOSIT, (rawHtml => rawHtml.includes('Instrucción de Depósito'))],
  [emailTypes.FAST_TRANSFER, (rawHtml) => rawHtml.includes('Transferencias Rápidas')],
  [emailTypes.IDENTIFICATION_BY_PHONE, (rawHtml) => rawHtml.includes('Menú Telefónico Banorte') && rawHtml.includes('Identificacion')],
  [emailTypes.LIMIT_MODIFICATION, (rawHtml) => rawHtml.includes('Modificación de monto máximo acumulado por día')],
  [emailTypes.NIP_CHANGE, (rawHtml) => rawHtml.includes('CAMBIO DE NIP')],
  [emailTypes.PHONE_RECHARGE, (rawHtml) => rawHtml.includes('Compra de Tiempo Aire')],
  [emailTypes.SPEI_INCOME, (rawHtml) => rawHtml.includes('SPEI Recibido')],
  [emailTypes.DIGITAL_DEBIT_CARD_CANCELLED, (rawHtml) => rawHtml.includes('Cancelación de Tarjeta Digital de Débito')],
  [emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED, (rawHtml) => rawHtml.includes('Activación de Tarjeta Digital asociada a tu Cuenta de Débito')],
  [emailTypes.DIGITAL_DEBIT_CARD_BLOCKED, (rawHtml) => rawHtml.includes('Bloqueo de Tarjeta Digital de Débito')],
  [emailTypes.DEBIT_CARD_BLOCKED, (rawHtml) => rawHtml.includes('Bloqueo de Tarjeta de Débito')],
  [emailTypes.SPEI_DEVOLUTION, (rawHtml) => rawHtml.includes('SPEI') && (rawHtml.includes('Devolucion') || rawHtml.includes('Extemporanea'))],
  [emailTypes.SERVICE_PAYMENT, (rawHtml) => rawHtml.includes('PAGO DE SERVICIOS')],
  [emailTypes.CREDIT_CARD_PAYMENT_OTHER_BANKS, (rawHtml) => rawHtml.includes('Pago de Tarjeta de Crédito Otros Bancos')]
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
