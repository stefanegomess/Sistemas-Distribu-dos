/*1) Crie um array de notas e calcule a média de todas essas notas e
exiba no console.*/

let notas = [28, 30, 17, 27];
let soma = 0;
for (let i=0;i<notas.length;i++){ 
    soma = soma + notas[i];
    }
let media = soma/notas.length;

console.log(media);