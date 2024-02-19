//Escreva um algoritmo que calcule a média de uma lista de notas fornecidas pelo usuário usando um loop while.

let notas = [];
let soma = 0;
let contador = 0;

while (true) {
    let nota = prompt("Insira uma nota (ou digite qualquer coisa para parar):");
    
  
    if (!isNaN(nota)) {

        notas.push(parseFloat(nota));
        soma += parseFloat(nota);
        contador++;
    } else {

        break;
    }
}


if (notas.length > 0) {
  
    let media = soma / contador;
    
    alert("A média das notas é: " + media.toFixed(2));
} else {
    alert("Nenhuma nota foi inserida.");
}