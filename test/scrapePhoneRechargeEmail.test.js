const fs = require('fs');
const { scrapePhoneRechargeEmail } = require('../src');

test('scrapePhoneRechargeEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/phone-recharge-email.html');

  const actual = scrapePhoneRechargeEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'expense',
    kind: 'phone_recharge',
    note: 'Compra de Tiempo Aire/Paquetes Sin Límite',
    operationDate: '01/Oct/2019 15:08:52 horas',
    amount: '200.00',
    phone: '0000000000'
  });
});
