/*Escreva um loop for ... in para imprimir cada propriedade no console.*/


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

meuPinguim.fly();

let text = "";
for (let x in meuPinguim) {
    text += meuPinguim[x];
    console.log(x)
}
