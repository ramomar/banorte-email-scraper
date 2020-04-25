const fs = require('fs');
const { scrapeCashWithdrawalEmail } = require('../src');

test('scrapeCashWithdrawalEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/cash-withdrawal-email.html');

  const actual = scrapeCashWithdrawalEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'expense',
    emailType: 'CASH_WITHDRAWAL',
    note: 'RETIRO DE EFECTIVO',
    operationDate: '04/Oct/2019 14:26:15 horas',
    applicationDate: '04/Oct/2019',
    channel: {
      emailType: 'Cajero Banorte',
      details: {
        name: 'CAJERO EN ALGUN LUGAR',
        location: 'UNA CIUDAD'
      }
    },
    amount: '100.00'
  });
});
