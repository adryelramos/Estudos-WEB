let horasTrabalhadas; //guarda as horas trabalhadas

const salarioPorHora = 35; //valor fixo

let salarioDoMes;
 

function calcularSalario(horasTrabalhadas){

  salarioDoMes = horasTrabalhadas * salarioPorHora;

  return "Salário igual a R$ " + salarioDoMes;

}

//colocar abaixo a quantidade de horas trabalhadas

console.log(calcularSalario(160));