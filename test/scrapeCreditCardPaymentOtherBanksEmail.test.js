const fs = require('fs');
const scrapeCreditCardPaymentOtherBanksEmail = require('../src/scrapeCreditCardPaymentOtherBanksEmail');

test('scrapeCreditCardPaymentOtherBanksEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/credit-card-payment-other-banks-email.html');

  const actual = scrapeCreditCardPaymentOtherBanksEmail(htmlEmail);

  expect(actual).toStrictEqual({
    recordType: 'EXPENSE',
    emailType: 'CREDIT_CARD_PAYMENT_OTHER_BANKS',
    note: 'Pago de Tarjeta de Crédito Otros Bancos | otro_usuario@mail.com | - ************1111',
    operationDate: '27/Mar/2020 17:10:27 horas',
    amount: '754.00',
    extraAmounts: [
      {
        fee: {
          amount: '0.00',
          tax: '0.00'
        }
      }
    ],
    bank: 'STP',
    receiver: 'OTRO USUARIO'
  });
});
