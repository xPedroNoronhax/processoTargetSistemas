function isFibonacci(num) {
    if (num < 0) return false; 
  
    let a = 0, b = 1;
  

    if (num === a || num === b) return true;
  
    let next = a + b;
  
    while (next <= num) {
      if (next === num) return true;
      a = b;
      b = next;
      next = a + b;
    }
  
    return false;
  }
  

  function checkFibonacci(num) {
    if (isFibonacci(num)) {
      console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
  }

  const numeroInformado = 21; 
  checkFibonacci(numeroInformado);