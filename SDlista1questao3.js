/*Faça um programa que entre com cinco números e imprima o
quadrado de cada número (Looping).*/

let numeros = [1,2,3,4,5];
console.log(numeros);

let loop = 1;
while(loop!= 0){
    for( let x=0;x<5;x++ ){
        numeros[x] = (numeros[x]**2);
    }
    console.log(numeros);
}
