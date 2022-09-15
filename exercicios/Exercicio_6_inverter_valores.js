let valor;

function inverso(valor) {
  if (typeof valor == "string") {
    return "Booleano ou números esperados, mas o parâmetro é String!";
  }else if (typeof valor == "boolean") {
    return !valor;
  }else {
    return -1*valor;
  }
}

console.log(inverso("Adryel"));
console.log(inverso(2));
console.log(inverso(-23));
console.log(inverso(true));
console.log(inverso(-1));