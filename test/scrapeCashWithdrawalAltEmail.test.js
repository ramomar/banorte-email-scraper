const fs = require('fs');
const scrapeCashWithdrawalAltEmail = require('../src/scrapeCashWithdrawalAltEmail');

test('scrapeCashWithdrawalAltEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/cash-withdrawal-alt-email.html');

  const actual = scrapeCashWithdrawalAltEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'EXPENSE',
    emailType: 'CASH_WITHDRAWAL_ALT',
    note: 'DISPOSICION DE EFECTIVO',
    operationDate: '14/May 20:15:31 hrs.',
    applicationDate: '14/May/2019',
    channel: {
      type: 'CAJERO VISA NET',
    },
    amount: '337.88'
  });
});
