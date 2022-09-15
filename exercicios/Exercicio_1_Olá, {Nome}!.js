let nome;
function cumprimentar(nome) {
  const saudacao = "Olá";
  //return [saudacao, nome].join(', ').concat("!");
  //ou
  return "Olá, " + nome + "!";
  //return `Olá, ${nome}!`
}

console.log(cumprimentar("Adryel"));