let idade

function convertYearsToDays(idade){
  this.idade = idade
  idade = idade * 365;
  return `Esta pessoa tem ${idade} dias de vida!`;
}

console.log(convertYearsToDays(1));
console.log(convertYearsToDays(5));
console.log(convertYearsToDays(25));
console.log(convertYearsToDays(30));
console.log(convertYearsToDays(50));
console.log(convertYearsToDays(90));