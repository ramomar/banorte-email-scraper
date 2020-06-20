const fs = require('fs');
const emailTypes = require('../src/emailTypes');
const scrapeBanorteEmail = require('../src');

describe('scrapeBanorteEmail', () => {
  it(`should be able to identify and scrape data from a ${emailTypes.ACCOUNT_INFO} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/account-info-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.ACCOUNT_INFO
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CASH_WITHDRAWAL} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/cash-withdrawal-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CASH_WITHDRAWAL
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CASH_WITHDRAWAL_ALT} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/cash-withdrawal-alt-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CASH_WITHDRAWAL_ALT
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CHARGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/charge-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CHARGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DEPOSIT} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/deposit-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DEPOSIT
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.FAST_TRANSFER} email (banorte)`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-banorte-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.FAST_TRANSFER
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.FAST_TRANSFER} email (other banks)`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/fast-transfer-other-banks-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.FAST_TRANSFER
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.IDENTIFICATION_BY_PHONE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/identification-by-phone-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.IDENTIFICATION_BY_PHONE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.LIMIT_MODIFICATION} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/limit-modification-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.LIMIT_MODIFICATION
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.NIP_CHANGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/nip-change-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.NIP_CHANGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.PHONE_RECHARGE} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/phone-recharge-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.PHONE_RECHARGE
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.SPEI_INCOME} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/spei-income-email.html');

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.SPEI_INCOME
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DIGITAL_DEBIT_CARD_CANCELLED} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-cancelled-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DIGITAL_DEBIT_CARD_CANCELLED
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-activated-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DIGITAL_DEBIT_CARD_ACTIVATED
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DIGITAL_DEBIT_CARD_BLOCKED} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/digital-debit-card-blocked-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DIGITAL_DEBIT_CARD_BLOCKED
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.DEBIT_CARD_BLOCKED} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/debit-card-blocked-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.DEBIT_CARD_BLOCKED
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.SPEI_DEVOLUTION} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/spei-devolution-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.SPEI_DEVOLUTION
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.SERVICE_PAYMENT} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/service-payment-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.SERVICE_PAYMENT
    });
  });

  it(`should be able to identify and scrape data from a ${emailTypes.CREDIT_CARD_PAYMENT_OTHER_BANKS} email`, () => {
    const htmlEmail = fs.readFileSync('./test/emails/credit-card-payment-other-banks-email.html').toString();

    const actual = scrapeBanorteEmail(htmlEmail);

    expect(actual).toMatchObject({
      emailType: emailTypes.CREDIT_CARD_PAYMENT_OTHER_BANKS
    });
  });

  it('should throw if there are multiple matches', () => {
    const makeActual = () => scrapeBanorteEmail('RETIRO DE EFECTIVO DISPOSICION DE EFECTIVO');

    expect(makeActual).toThrow('Multiple matches: CASH_WITHDRAWAL, CASH_WITHDRAWAL_ALT.');
  });

  it('should throw when a scraper has not been implemented', () => {
    const makeActual = () => scrapeBanorteEmail('<a></a>');

    expect(makeActual).toThrow('Scraper not implemented.');
  });
});
