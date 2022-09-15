//troca de dados convencional

let a = 7;
let b = 94;

console.log("a = "+ a +"\n" +"b = " + b);

let c = a;
a = b;
b = c;

console.log("a = "+ a +"\n" +"b = " + b);

//troca de dados aprimorada

[a, b] = [b, a];

console.log("a = "+ a +"\n" +"b = " + b);