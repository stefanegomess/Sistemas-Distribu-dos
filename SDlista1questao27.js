/*Escreva outro método chamado fly e, dentro desse método, use uma instrução if /
else para imprimir "Eu posso voar!" no console se a propriedade podeVoar do seu
pinguim for verdadeira ou "Não posso voar!" se sua propriedade podeVoar for false.*/


let meuPinguim = {
    nome: "Pinguim Rei",
    origem: "Antartida",
    idioma: "Inglês",
    autor: "Stefane"
}


console.log("Ola, sou um pinguim e meu nome e " + meuPinguim.nome + "!");
meuPinguim.podeVoar = false;

meuPinguim.emitirSom = function() {
    console.log("CHIRP CHIRP! É assim que os pinguins se parecem?");
}

meuPinguim.fly = function() {
    if(meuPinguim.podeVoar==true){
        console.log("Eu posso voar!")
    }else{
    console.log("Nao posso voar!");
    }
}
