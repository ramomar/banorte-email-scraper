# banorte-email-scraper
[![ramomar](https://circleci.com/gh/ramomar/banorte-email-scraper.svg?style=svg)](https://app.circleci.com/pipelines/gh/ramomar/banorte-email-scraper)

A library for scraping transaction emails from Banorte.

## Scrapers
The library includes 18 scrapers collected from different types of emails collected over 1 year period.

You can take a look [here](https://github.com/ramomar/banorte-email-scraper/tree/master/test/emails) in order to see which emails have an scraper implemented already.

*The parsing of the dates is up to you due to the weird formats Banorte uses. In my opinion those dates are not very accurate. I recommend taking a look at the timestamp of the email when it arrived in your inbox, and then comparing the two dates in order to see which one is better for your use case.*

## Usage
1. Install the package.
```sh
npm install --save git+ssh://git@github.com/ramomar/banorte-email-scraper.git
```

2. Require the scraper and use it!
```js
const fs = require('fs');
const scrapeBanorteEmail = require('banorte-email-scraper');

const htmlInBase64 = fs.readFileSync('./banorte-email-in-base-64');
const html = Buffer.from(htmlInBase64, 'base64').toString();

console.log(scrapeBanorteEmail(html));
```

### Example output

```js
[
    {
        recordType: 'EXPENSE',
        emailType: 'CHARGE',
        note: 'COMPRA EN PAYPAL3',
        operationDate: '14/May 23:32:03 hrs.',
        applicationDate: '14/May/2019',
        amount: '76.87',
        channel: {
            type: 'TPV(COMPRA COMERCIO)'
        }
    },
    {
        recordType: 'EXPENSE',
        emailType: 'CASH_WITHDRAWAL_ALT',
        note: 'DISPOSICION DE EFECTIVO',
        operationDate: '14/May 20:15:31  hrs.',
        applicationDate: '14/May/2019',
        channel: {
            type: 'CAJERO VISA NET'
        },
        amount: '337.88'
    },
    {
        recordType: 'EXPENSE',
        emailType: 'FAST_TRANSFER',
        note: 'Transferencias Rápidas | Pago de una cosa',
        operationDate: '06/Abr/2020 18:49:55 horas',
        amount: '200.00',
        extraAmounts: [{
            fee: {
                amount: '3.00'.
                tax: '0.48'
            }
        }],
        bank: 'SCOTIABANK',
        receiver: 'Alguien'
    }
]
```

### Record types

| Record type       | Description |
|-------------------|-------------|
| INCOME            | A record that represents an income. |
| EXPENSE           | A record that represents an expense. |
| ACCOUNT_OPERATION | A record that represents an account operation log (change of NIP, virtual card limit modification, etc). |

## Testing
In order to test you might run `npm test`.
