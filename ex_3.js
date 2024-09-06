function billingResult(file) {
  let lowestValue = null;
  let highestValue = null;
  let billingSum = 0;
  let daysWithBilling = 0
  let averageHighDays = 0 

  for(let i = 0; i < file.length; i++){
    const value = file[i].value

    if(value > 0){
        if(lowestValue === null || value < lowestValue){
            lowestValue = value
        }

        if(highestValue === null || value > highestValue){
            highestValue = value
        }
        
        billingSum += value
        daysWithBilling++
    }
  }

  const monthAverage = billingSum / daysWithBilling

  for(let i = 0; i< file.length; i++){
    const value = file[i].value
    if(value > monthAverage){
        averageHighDays++
    }
  }

  return{
    lowestValue,
    highestValue,
    averageHighDays
  }
}

const monthBilling = [
    { "day": 1, "value": 1000.0 },
    { "day": 2, "value": 0.0 },
    { "day": 3, "value": 2000.0 },
    { "day": 4, "value": 0.0 },
    { "day": 5, "value": 3000.0 },
    { "day": 6, "value": 4000.0 }
];

const result = billingResult(monthBilling)

console.log("Menor valor de faturamento: ", result.lowestValue);
console.log("Maior valor de faturamento: ", result.highestValue);
console.log("Faturamento acima da média: ", result.averageHighDays);

