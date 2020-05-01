const makeBanorteEmailScraper = require('./makeBanorteEmailScraper');
const emailTypes = require('./emailTypes');
const movementTypes = require('./movementTypes');
const extractAmount = require('./extractAmount');

function scrapeFastTransferBanorteEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.FAST_TRANSFER,
    note: [fields[4], fields[28], fields[20]].join(' | '),
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[24]),
    extraAmounts: [
      {
        fee: {
          amount: extractAmount(fields[30]),
          tax: extractAmount(fields[32])
        }
      }
    ],
    bank: fields[22],
    receiver: fields[16]
  };
}

function scrapeFastTransferOtherBanksEmail(fields) {
  return {
    movementType: movementTypes.EXPENSE,
    emailType: emailTypes.FAST_TRANSFER,
    note: [fields[4], fields[32], fields[24]].join(' | '),
    operationDate: `${fields[6]} ${fields[8]}`,
    amount: extractAmount(fields[28]),
    extraAmounts: [
      {
        fee: {
          amount: extractAmount(fields[34]),
          tax: extractAmount(fields[36])
        }
      }
    ],
    bank: fields[26],
    receiver: fields[20]
  };
}

function scrapeFastTransferEmail(fields) {
  const bankIndex = fields.findIndex(f => f.includes('Banco Destino:')) + 1;

  const bank = fields[bankIndex];

  if (bank === 'Banorte') {
    return scrapeFastTransferBanorteEmail(fields);
  } else {
    return scrapeFastTransferOtherBanksEmail(fields);
  }
}

module.exports = makeBanorteEmailScraper(scrapeFastTransferEmail);
