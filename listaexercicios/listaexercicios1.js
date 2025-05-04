/*CODIFICA- FORMAÇÃO DESENVOLVEDOR FULL STACK JÚNIOR*/

// Instala o node.js e o npm no seu navegador.
// Instala a extensão "code runner" e configure para ela rodar no seu terminal
//Para executar essa lista de exercícios faz o comando "npm install prompt=sync" no terminal command prompt para instalar as dependências necessárias.
//Deixei comentado os exercícios, para executar um de cada vez, basta descomentar o exercício desejado.

const prompt = require("prompt-sync")();

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
/*let numero = parseInt(prompt("Digite um número inteiro: "));
if (numero % 2 === 0) {
    console.log("O número é par.");
}
else {  
    console.log("O número é ímpar.");
}*/

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
/*let idade = parseInt(prompt("Digite a sua idade: "));
if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.");
}
else if (idade >= 13 && idade <= 17) {
    console.log("Você é um adolescente.");
}
else if (idade >= 18 && idade <= 59) {
    console.log("Você é um adulto.");
}   
else if (idade >= 60) {
    console.log("Você é um idoso.");
}
else {  
    console.log("Idade inválida.");
}*/

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "aprovado", "recuperação" ou "reprovado", utilizando if-else if.
/*let nota = parseFloat(prompt("Digite a sua nota (0 a 10): "));
if (nota >= 0 && nota < 5) {
    console.log("Reprovado.");
}
else if (nota >= 5 && nota < 7) {
    console.log("Recuperação.");
}
else if (nota >= 7 && nota <= 10) {
    console.log("Aprovado.");
}
else {  
    console.log("Nota inválida.");
}*/

//4. Crie um menu interativo no console que oferece aos usúarios a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
/*console.log ("Escolha uma opção:\n1 - Vermelho \n2 - Azul \n3 - Verde\n");
let opcao = prompt("Digite um número: ");

switch (opcao) {
    case "1":
        console.log("Você consegue vencer seus sonhos.");
        break;
    case "2":
        console.log("Você está quase lá.");
        break;
    case "3":
        console.log("Você é vitorioso.");
        break;
    default:
        console.log("Opção inválida.");
        break;
}*/

//5. Escreva um programa que calcula o índice de massa corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
/*let peso = parseFloat(prompt("Digite o seu peso (em kg): "));
let altura = parseFloat(prompt("Digite a sua altura (em metros): "));
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Baixo peso.");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal.");
}
else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso.");
}
else if (imc >= 30) {
    console.log("Obesidade.");
}
else {  
    console.log("Dados inválidos.");
}*/

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: isósceles, escaleno ou equilátero. Para verificar se os lados fornecidos foram um triângulo: A < B + C e B < A + C e C < A + B. Triângulo isósceles: possui dois lados iguais (A = B ou A = C ou B = C). Triângulo escaleno: possui todos os lados diferentes (A <> B e B <> C). Triângulo equilátero: possui todos os lados iguais (A = B e B = C).
/*let ladoA = parseFloat(prompt("Digite o lado A: "));
let ladoB = parseFloat(prompt("Digite o lado B: "));
let ladoC = parseFloat(prompt("Digite o lado C: "));
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
}
else {
    console.log("Os lados fornecidos não formam um triângulo.");
}*/

//7. As maças custam R$ 0,30 se forem compradas menos de uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
/*let macas = parseInt(prompt("Digite o número de maçãs compradas: "));
let precoPorMaca = 0;
if (macas < 12) {
    precoPorMaca = 0.30;
}
else {
    precoPorMaca = 0.25;
}

let valorTotal = macas * precoPorMaca;
console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));*/

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
/*let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
if (valor1 < valor2) {
    console.log("Ordem crescente: " + valor1 + ", " + valor2);
}
else {
    console.log("Ordem crescente: " + valor2 + ", " + valor1);
}*/

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
/*console.log("Contagem regressiva:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}*/

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
/*let numero = parseInt(prompt("Digite um número inteiro: "));
for (let i = 0; i < 10; i++) {
    console.log(numero);
}*/

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
/*let soma = 0;
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Número ${i}: `));
    soma += numero;
}
console.log("Soma total: " + soma);*/

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
/*let numero = parseInt(prompt("Digite um número para ver a tabuada: "));
for (let i = 1; i <= 10; i++) {
    console.log (`${numero} x ${i} = ${numero * i}`);
}*/

//13. Fazer um algoritmo para receber números decimais até que o u´suario digite 0 e fazer a média aritmética desses números.
/*let soma = 0;
let contador = 0;
let numero = parseFloat(prompt("Digite um número decimal (0 para sair): "));
while (numero !== 0) {
    soma += numero;
    contador++;
    numero = parseFloat(prompt("Digite um número decimal (0 para sair): "));
}
if (contador > 0) {
    let media = soma / contador;
    console.log("Média aritmética: " + media.toFixed(2));
}
else {
    console.log("Nenhum número foi digitado.");
}*/

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
/*let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
let fatorial = 1, i = numero;
do {
    fatorial *= i;
    i--;
} while (i > 1);
console.log(`Fatorial de ${numero} é ${fatorial}`);*/

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
/*let n1 = 0, n2 = 1;
console.log("Sequência de Fibonacci: ");
for (let i = 1; i <= 10; i++) {
    console.log(n1);
    let proximoTermo = n1 + n2;
    n1 = n2;
    n2 = proximoTermo;
}*/