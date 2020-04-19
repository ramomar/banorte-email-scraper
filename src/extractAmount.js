function extractAmount(rawAmount) {
  return parseFloat((/\d+\.\d+/).exec(rawAmount)[0]).toFixed(2);
}

module.exports = extractAmount;
