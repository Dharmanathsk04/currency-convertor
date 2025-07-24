function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from-currency").value;
  const to = document.getElementById("to-currency").value;
  const resultBox = document.getElementById("result");

  if (isNaN(amount)) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  const rates = {
    USD: { INR: 83.5, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.08, INR: 90.8 },
  };

  if (from === to) {
    resultBox.textContent = `Same currency selected. Result: ${amount.toFixed(2)} ${to}`;
    return;
  }

  const rate = rates[from][to];
  const converted = amount * rate;

  resultBox.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
