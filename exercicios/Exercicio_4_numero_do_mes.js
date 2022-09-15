const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];
let numeroMes;

function mostrarMes(numeroMes){
  if(numeroMes>=1 && numeroMes<=12){
    return meses[numeroMes-1];
  }else if (numeroMes<=0||numeroMes>=13) {
    return "Número incorreto!";
  }else{
    return "Não é um número!";
  }
}

console.log(mostrarMes(2));
console.log(mostrarMes(1));
console.log(mostrarMes(10));
console.log(mostrarMes(9));
console.log(mostrarMes("Texto"));
console.log(mostrarMes(22));