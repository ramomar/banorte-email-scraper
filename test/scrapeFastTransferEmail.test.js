const fs = require('fs');
const scrapeFastTransferEmail = require('../src/scrapeFastTransferEmail');

describe('scrapeFastTransferEmail', () => {
  it('should be able to scrape an email for a transfer to a banorte account', () => {
    const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-banorte-email.html');

    const actual = scrapeFastTransferEmail(htmlEmail);

    expect(actual).toStrictEqual({
      movementType: 'EXPENSE',
      emailType: 'FAST_TRANSFER',
      note: 'Transferencias Rápidas | Cosas | beneficiario@mail.com',
      operationDate: '21/Oct/2019 11:23:02 horas',
      amount: '600.00',
      extraAmounts: [
        {
          fee: {
            amount: '0.00',
            tax: '0.00'
          }
        }
      ],
      bank: 'Banorte',
      receiver: 'No capturado'
    });
  });

  it('should be able to scrape an email for a transfer to another bank account', () => {
    const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-other-banks-email.html');

    const actual = scrapeFastTransferEmail(htmlEmail);

    expect(actual).toStrictEqual({
      movementType: 'EXPENSE',
      emailType: 'FAST_TRANSFER',
      note: 'Transferencias Rápidas | Open source | hola@github.com',
      operationDate: '03/Ago/2019 11:13:14 horas',
      amount: '806.00',
      extraAmounts: [
        {
          fee: {
            amount: '3.00',
            tax: '0.48'
          }
        }
      ],
      bank: 'BBVA BANCOMER',
      receiver: 'GitHub'
    });
  });
});
