function reverseString(str) {
  let inverseString = "";

  let i = str.length - 1;
  while (i >= 0) {
    inverseString += str[i];
    i--;
  }

  return inverseString;
}

let originalString = "Exemplo";
let reverseString = reverseString(originalString);

console.log("Original: " + originalString);
console.log("Invertida: " + reverseString);
