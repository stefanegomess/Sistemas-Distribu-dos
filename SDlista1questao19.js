/*Substitua o valor do meio por “Axé”. Seu código para encontrar o valor do meio deve
funcionar para qualquer array de tamanho par, faça a verificação com um IF.*/

var estilomusical = ['Rock', 'Pagode'];

var adicionar = estilomusical.push('Funk');
var copiararray = estilomusical.slice();
console.log("Estilo musical 1: " + estilomusical);
console.log("Backup Array: "+ copiararray);
var buffer = [];
var conta = 0;

console.log("Backup array: "+copiararray)

let tamanho = (estilomusical.length)-1;
console.log(tamanho);

if(tamanho%2==0){
    for( let i=0; i<((copiararray.length+1)/2)-1;i++){//1
        adicionar = buffer.push(estilomusical[0]);
        var removeprimeiro = estilomusical.shift();
        conta++;
    }
    var removeprimeiro = estilomusical.shift();
    var adicionar = estilomusical.unshift('Axe');
    console.log(estilomusical);

    for( let i=0; i<conta;i++){//2
        estilomusical.unshift(buffer[i]);
    }
}

console.log("Estilo musical: " + estilomusical);