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
const scrapeActivateDigitalDebitCardEmail = require('./scrapeActivateDigitalDebitCardEmail');
const scrapeBanorteEmail = require('./scrapeBanorteEmail');

module.exports = {
  scrapeChargeEmail,
  scrapeNipChangeEmail,
  scrapeAccountInfoEmail,
  scrapeCashWithdrawalEmail,
  scrapeDepositEmail,
  scrapeIdentificationByPhoneEmail,
  scrapeSpeiIncomeEmail,
  scrapeLimitModificationEmail,
  scrapeFastTransferEmail,
  scrapePhoneRechargeEmail,
  scrapeCancelDigitalDebitCardEmail,
  scrapeActivateDigitalDebitCardEmail,
  scrapeBanorteEmail
};
