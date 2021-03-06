const fs = require('fs');
const scrapeDepositEmail = require('../src/scrapeDepositEmail');

test('scrapeDepositEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/deposit-email.html');

  const actual = scrapeDepositEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'EXPENSE',
    emailType: 'DEPOSIT',
    note: 'Instrucción de Depósito | Pago del cine',
    amount: '792.00',
    operationDate: '31/Oct/2019 13:41:03 horas',
    bank: 'BBVA BANCOMER',
    receiver: 'USUARIO BBVA BANCOMER'
  });
});
