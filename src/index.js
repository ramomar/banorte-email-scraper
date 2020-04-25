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
const scrapeBanorteEmail = require('./scrapeBanorteEmail');

module.exports = {
  scrapeChargeEmail,
  scrapeNipChangeEmail,
  scrapeAccountInfoEmail,
  scrapeCashWithdrawalEmail,
  scrapeDepositEmail,
  scrapeIdentificationEmail,
  scrapeSpeiIncomeEmail,
  scrapeLimitModificationEmail,
  scrapeFastTransferEmail,
  scrapePhoneRechargeEmail,
  scrapeBanorteEmail
};
