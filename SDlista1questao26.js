/*Adicione um método ao seu pinguim chamado emitirSom que imprime no console:
"CHIRP CHIRP! É assim que os pinguins se parecem?" (Observação: mais uma vez,
não modifique seu código anterior! Execute esta etapa escrevendo uma nova linha
de código.)*/


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

meuPinguim.emitirSom();