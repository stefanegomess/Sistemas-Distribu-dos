  
/*Escreva outra linha de código que adicione uma nova propriedade ao seu pinguim
chamada podeVoar e defina-a como false. (Observação: não modifique o código de
criação de pinguins que você escreveu acima! Execute esta etapa em uma linha de
código separada.)*/


let meuPinguim = {
    nome: "Pinguim Rei",
    origem: "Antartida",
    idioma: "Inglês",
    autor: "Stefane"
}
console.log("Ola, sou um pinguim e meu nome e " + meuPinguim.nome + "!");
meuPinguim.podeVoar = false;
console.log("Pode voar: " + meuPinguim.podeVoar);
