const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';
const template = `
  olá
  ${nome}!
`
console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log("lindo".toUpperCase());
console.log(up("ai"));

console.log(`Ei... ${up('cuidado')}!!`);