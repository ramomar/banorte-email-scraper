const fs = require('fs');
const { scrapeFastTransferEmail } = require('../src');

test('scrapeFastTransferEmail', async () => {
  const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-email.html');

  const actual = scrapeFastTransferEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'expense',
    emailType: 'FAST_TRANSFER',
    note: 'Transferencias Rápidas | Open source | hola@github.com',
    operationDate: '03/Ago/2019 11:13:14 horas',
    amount: '806.00',
    bank: 'BBVA BANCOMER',
    receiver: 'GitHub'
  });
});
