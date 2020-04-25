const scrapers = require('.');
const emailTypes = require('./emailTypes');

function getEmailType(rawHtml) {
  return null;
}

function scrapeBanorteEmail(rawHtml) {
  const emailType = getEmailType(rawHtml);

  switch (emailType) {
    case emailTypes.ACCOUNT_INFO:
      return scrapers.scrapeAccountInfoEmail(rawHtml);
    case emailTypes.CASH_WITHDRAWAL:
      return scrapers.scrapeCashWithdrawalEmail(rawHtml);
    case emailTypes.CHARGE:
      return scrapers.scrapeChargeEmail(rawHtml);
    case emailTypes.DEPOSIT:
      return scrapers.scrapeDepositEmail(rawHtml);
    case emailTypes.FAST_TRANSFER:
      return scrapers.scrapeFastTransferEmail(rawHtml);
    case emailTypes.IDENTIFICATION:
      return scrapers.scrapeIdentificationEmail(rawHtml);
    case emailTypes.LIMIT_MODIFICATION:
      return scrapers.scrapeLimitModificationEmail(rawHtml);
    case emailTypes.NIP_CHANGE:
      return scrapers.scrapeNipChangeEmail(rawHtml);
    case emailTypes.PHONE_RECHARGE:
      return scrapers.scrapePhoneRechargeEmail(rawHtml);
    case emailTypes.SPEI_INCOME:
      return scrapers.scrapeSpeiIncomeEmail(rawHtml);
    default:
      throw new Error('Scraper not implemented.');
  }
}

module.exports = scrapeBanorteEmail;
