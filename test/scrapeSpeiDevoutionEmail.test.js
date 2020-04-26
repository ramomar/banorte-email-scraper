const fs = require('fs');
const { scrapeSpeiDevolutionEmail } = require('../src');

test('scrapeSpeiDevolutionEmail', () => {
  const htmlEmail = fs.readFileSync('./test/emails/spei-devolution-email.html');

  const actual = scrapeSpeiDevolutionEmail(htmlEmail);

  expect(actual).toStrictEqual({
    movementType: 'INCOME',
    emailType: 'SPEI_DEVOLUTION',
    note: 'Se realizo un ABONO por devolucion SPEI de $ 792.00 MN el 31/OCT/2019 a las 13:41:03 horas a la cuenta ************0000 Clave de Rastreo 0000AAAA000000000000000',
    operationDate: '31/OCT/2019 13:41:03',
    amount: '792.00'
  });
});
