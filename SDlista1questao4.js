//Peça ao usuário para digitar 5 números em uma caixa de texto,
//separados por vírgula, Verifique qual é o maior número e exiba-o.


let numerosLista = prompt("Digite numeros separados por vírgula",0);
console.log("O maior valor: "+ max(numerosLista));


function max(num_string){
    var maior = numerosLista[0];
    var i=1; 

    do{
        if(numerosLista[i]>maior){
            maior = numerosLista[i];
            i++;
        }
        i++;
    }while(i<numerosLista.length);

    return maior;
}
