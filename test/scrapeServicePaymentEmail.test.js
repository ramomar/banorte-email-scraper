const fs = require('fs');
const { scrapeServicePaymentEmail } = require('../src');

test('scrapeServicePaymentEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/service-payment-email.html');

  const actual = scrapeServicePaymentEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'EXPENSE',
    emailType: 'SERVICE_PAYMENT',
    note: 'PAGO DE SERVICIOS',
    amount: '4000.00',
    operationDate: '27/Nov 17:07:03 hrs.',
    applicationDate: '27/Nov/2019',
    channel: {
      type: 'CAJERO BANORTE'
    }
  });
});
