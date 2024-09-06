let billings = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  others: 19849.53,
};

const totalBilling = (billings) => {
  let total = 0;
  for (let state in billings) {
    total += billings[state];
  }

  return total;
};

let total = totalBilling(billings)

const showBillingPercentages = (billings) => {
    let total = totalBilling(billings);
    
    for (let state in billings) {
      let percentual = (billings[state] / total) * 100;
      console.log(`${state.toUpperCase()}: ${percentual.toFixed(2)}%`);
    }
  };
  
  // Exibe os percentuais de faturamento
  showBillingPercentages(billings);