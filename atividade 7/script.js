//Escreva um algoritmo que calcule o fatorial de um número fornecido pelo usuário usando um loop for.

var numero = parseInt(prompt("Digite um número para calcular o fatorial:"));


var fatorial = 1;



for (var i = 1; i <= numero; i++) {
    fatorial *= i;
}

alert("O fatorial de " + numero + " é: " + fatorial);