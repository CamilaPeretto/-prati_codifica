/*CODIFICA- FORMAÇÃO DESENVOLVEDOR FULL STACK JÚNIOR*/

// Instala o node.js e o npm no seu navegador.
// Instala a extensão "code runner" e configure para ela rodar no seu terminal
//Para executar essa lista de exercícios faz o comando "npm install prompt=sync" no terminal command prompt para instalar as dependências necessárias.
//Deixei comentado os exercícios, para executar um de cada vez, basta descomentar o exercício desejado.

const prompt = require("prompt-sync")();

//1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

/*const cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia? "));

const anosFumando = Number(prompt("Há quantos anos você fuma? "));

const totalCigarros = cigarrosPorDia * 365 * anosFumando;

const minutosPerdidos = totalCigarros * 10;

const diasPerdidos = minutosPerdidos / 60 / 24;

console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);*/

//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

/*const velocidade = Number(prompt("Qual a velocidade do carro em Km/h? "));

const limite = 80;
const valorPorKm = 5;

if (velocidade > limite) {
    const kmExcedente = velocidade - limite;

    const multa = kmExcedente * valorPorKm;

    console.log(`Você foi multado! Excedeu ${kmExcedente} Km/h.`);
    console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite. Dirija com segurança!");
}*/

//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

/*const distancia = Number(prompt("Qual a distância da viagem em Km? "));

let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);*/

//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

/*const a = Number(prompt("Digite o comprimento do primeiro segmento: "));
const b = Number(prompt("Digite o comprimento do segundo segmento: "));
const c = Number(prompt("Digite o comprimento do terceiro segmento: "));

if (a < b + c && b < a + c && c < a + b) {
    console.log("Os segmentos PODEM formar um triângulo.");
} else {
    console.log("Os segmentos NÃO PODEM formar um triângulo.");
}*/

//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

/*const opcoes = ["pedra", "papel", "tesoura"];

const jogador = prompt("Escolha: pedra, papel ou tesoura: ").toLowerCase();

if (!opcoes.includes(jogador)) {
    console.log("Opção inválida. Escolha entre pedra, papel ou tesoura.");
} else {
    const computador = opcoes[Math.floor(Math.random() * 3)];
    console.log(`Computador escolheu: ${computador}`);

    if (jogador === computador) {
        console.log("Empate!");
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Você perdeu!");
    }
}*/

//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

/*const numeroSorteado = Math.floor(Math.random() * 5) + 1;

const palpite = Number(prompt("Tente adivinhar o número (entre 1 e 5): "));

if (palpite < 1 || palpite > 5) {
    console.log("Número inválido! Escolha entre 1 e 5.");
} else {
    if (palpite === numeroSorteado) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log(`Você errou. O número era ${numeroSorteado}.`);
    }
}*/

//7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

/*Carros populares:
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo:
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

/*const tipo = prompt("Digite o tipo do carro (popular ou luxo): ").toLowerCase();

const dias = Number(prompt("Quantos dias de aluguel? "));

const km = Number(prompt("Quantos km foram percorridos? "));

let precoDia = 0;
let precoKm = 0;

if (tipo === "popular") {
    precoDia = 90;

    if (km <= 100) {
        precoKm = km * 0.20;
    } else {
        precoKm = km * 0.10;
    }

} else if (tipo === "luxo") {
    precoDia = 150;

    if (km <= 200) {
        precoKm = km * 0.30;
    } else {
        precoKm = km * 0.25;
    }

} else {
    console.log("Tipo de carro inválido. Digite 'popular' ou 'luxo'.");
    return; 
}

const precoTotal = (precoDia * dias) + precoKm;

console.log(`O preço total a pagar é: R$ ${precoTotal.toFixed(2)}`);*/

//8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:

/*- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

/*const horas = Number(prompt("Quantas horas de atividade física você fez este mês? "));

let pontos = 0;

if (horas <= 10) {
    pontos = horas * 2;
} else if (horas <= 20) {
    pontos = horas * 5;
} else {
    pontos = horas * 10;
}

const dinheiro = pontos * 0.05;

console.log(`Você acumulou ${pontos} pontos.`);
console.log(`Você ganhou R$ ${dinheiro.toFixed(2)}.`);*/

// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

/*let totalHomens = 0;
let totalMulheres = 0;

while (true) {
    const salario = Number(prompt("Digite o salário do funcionário: "));

    const sexo = prompt("Digite o sexo do funcionário (M/F): ").toLowerCase();

    if (sexo === "m") {
        totalHomens += salario;
    } else if (sexo === "f") {
        totalMulheres += salario;
    } else {
        console.log("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.");
    }

    const continuar = prompt("Deseja cadastrar outro funcionário? (S/N): ").toLowerCase();

    if (continuar !== "s") {
        break;
    }
}

console.log(`\nTotal pago aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);*/

//10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
/*a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

/*let soma = 0;
let menor = null;
let quantidade = 0;
let pares = 0;

do {
    const numero = Number(prompt("Digite um número: "));
    soma += numero;
    quantidade++;

    if (menor === null || numero < menor) {
        menor = numero;
    }

    if (numero % 2 === 0) {
        pares++;
    }

    var continuar = prompt("Deseja continuar? (S/N): ").toLowerCase();
} while (continuar === "s");

const media = soma / quantidade;

console.log(`\n Resultados:`);
console.log(`- Somatório dos valores: ${soma}`);
console.log(`- Menor valor digitado: ${menor}`);
console.log(`- Média dos valores: ${media.toFixed(2)}`);
console.log(`- Quantidade de valores pares: ${pares}`);*/

// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.

/*const primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
const razao = Number(prompt("Digite a razão da PA: "));

let soma = 0;

console.log("\n Os 10 primeiros termos da PA são:");

for (let i = 0; i < 10; i++) {
    const termo = primeiroTermo + i * razao;
    console.log(`Termo ${i + 1}: ${termo}`);
    soma += termo;
}

console.log(`\n Soma dos 10 termos: ${soma}`);*/

// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

/*let anterior = 1;
let atual = 1;

console.log(" Os 10 primeiros elementos da Sequência de Fibonacci:");

console.log(anterior);
console.log(atual);

for (let i = 3; i <= 10; i++) {
    const proximo = anterior + atual;
    console.log(proximo);

    anterior = atual;
    atual = proximo;
}*/

// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.

/*const fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(" Vetor com os 15 primeiros números da Sequência de Fibonacci:");
console.log(fibonacci.join(", "));*/

//14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

/*const nomes = [];

for (let i = 0; i < 7; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    nomes.push(nome);
}

console.log("Nomes em ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}*/

//15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

/*const numeros = [];

for (let i = 0; i < 10; i++) {
    const numero = Number(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

console.log("Números pares e suas posições:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Valor ${numeros[i]} na posição ${i}`);
    }
}*/

//16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

/*const numeros = [];

for (let i = 0; i < 20; i++) {
    const aleatorio = Math.floor(Math.random() * 100);
    numeros.push(aleatorio);
}

console.log("Números gerados:");
console.log(numeros.join(", "));

const ordenados = [...numeros].sort((a, b) => a - b);

console.log("Números em ordem crescente:");
console.log(ordenados.join(", "));*/

//17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.

/*const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    const idade = Number(prompt(`Digite a idade de ${nome}: `));

    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas menores de idade:");

let encontrouMenor = false;

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`- ${nomes[i]} tem ${idades[i]} anos.`);
        encontrouMenor = true;
    }
}

if (!encontrouMenor) {
    console.log("Nenhuma pessoa menor de idade foi cadastrada.");
}*/

//18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.

/*const funcionario = {
    nome: prompt("Digite o nome do funcionário: "),
    cargo: prompt("Digite o cargo do funcionário: "),
    salario: Number(prompt("Digite o salário do funcionário: "))
};

console.log("Dados do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);*/

//19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.

/*const horarios = [];

for (let i = 0; i < 5; i++) {
    console.log(` Horário ${i + 1}:`);

    let hora, minuto, segundo;

    do {
        hora = Number(prompt("Digite a hora (0-23): "));
        if (hora < 0 || hora > 23 || isNaN(hora)) {
            console.log("Hora inválida! Tente novamente.");
        }
    } while (hora < 0 || hora > 23 || isNaN(hora));

    do {
        minuto = Number(prompt("Digite os minutos (0-59): "));
        if (minuto < 0 || minuto > 59 || isNaN(minuto)) {
            console.log("Minuto inválido! Tente novamente.");
        }
    } while (minuto < 0 || minuto > 59 || isNaN(minuto));

    do {
        segundo = Number(prompt("Digite os segundos (0-59): "));
        if (segundo < 0 || segundo > 59 || isNaN(segundo)) {
            console.log("Segundo inválido! Tente novamente.");
        }
    } while (segundo < 0 || segundo > 59 || isNaN(segundo));

    const horarioFormatado = `${hora.toString().padStart(2, "0")}.${minuto.toString().padStart(2, "0")}.${segundo.toString().padStart(2, "0")}`;
    horarios.push(horarioFormatado);
}

console.log("Horários validados:");
horarios.forEach((h, i) => console.log(`Horário ${i + 1}: ${h}`));*/

//20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
/*Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).*/

/*const funcionarios = [];
const totalFuncionarios = 80;

for (let i = 0; i < totalFuncionarios; i++) {
    console.log(`Funcionário ${i + 1}:`);

    const matricula = prompt("Matrícula: ");
    const nome = prompt("Nome: ");
    const salarioBruto = Number(prompt("Salário bruto: "));

    const inss = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - inss;

    funcionarios.push({
        matricula,
        nome,
        salarioBruto,
        inss,
        salarioLiquido
    });
}

console.log("CONTRACHEQUES:");

for (const f of funcionarios) {
    console.log(`Matrícula: ${f.matricula}`);
    console.log(`Nome: ${f.nome}`);
    console.log(`Salário bruto: R$ ${f.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS (12%): R$ ${f.inss.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${f.salarioLiquido.toFixed(2)}`);
    console.log("-------------------------------");
}*/

//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

/*function calcularPesoIdeal(altura, sexo) {
    if (sexo === "m") {
        return 72.7 * altura - 58;
    } else if (sexo === "f") {
        return 62.1 * altura - 44.7;
    } else {
        return null;
    }
}

const altura = Number(prompt("Digite a altura (em metros): "));
const sexo = prompt("Digite o sexo (m para homem, f para mulher): ").toLowerCase();

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
    console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
} else {
    console.log("Sexo inválido. Use 'm' para homem ou 'f' para mulher.");
}*/

//22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.

/*function pesquisaPopulacional() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let totalPessoas = 0;
    let maiorSalario = 0;
    let salarioBaixo = 0;

    while (true) {
        console.log(`Pessoa ${totalPessoas + 1}`);

        const salario = Number(prompt("Salário: R$ "));
        const filhos = Number(prompt("Número de filhos: "));

        totalSalario += salario;
        totalFilhos += filhos;
        totalPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salarioBaixo++;
        }

        const continuar = prompt("Deseja cadastrar outra pessoa? (S/N): ").toLowerCase();
        if (continuar !== "s") {
            break;
        }
    }

    const mediaSalario = totalSalario / totalPessoas;
    const mediaFilhos = totalFilhos / totalPessoas;
    const percentualSalarioBaixo = (salarioBaixo / totalPessoas) * 100;

    console.log("RESULTADOS DA PESQUISA:");
    console.log(`Média salarial: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual com salário até R$ 350,00: ${percentualSalarioBaixo.toFixed(2)}%`);
}

pesquisaPopulacional();*/

//23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.

/*const ordem = 7;
const matrizIdentidade = [];

for (let i = 0; i < ordem; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < ordem; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

console.log("Matriz Identidade 7x7:");
for (let i = 0; i < ordem; i++) {
    console.log(matrizIdentidade[i].join(" "));
}*/

//24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.

/*const linhas = 6;
const colunas = 8;

const matriz = [];
const vetorNegativos = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    let contadorNegativos = 0;

    for (let j = 0; j < colunas; j++) {
        const valor = Math.floor(Math.random() * 21) - 10; 
        matriz[i][j] = valor;

        if (valor < 0) {
            contadorNegativos++;
        }
    }

    vetorNegativos[i] = contadorNegativos;
}

console.log("Matriz M[6x8]:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].map(v => v.toString().padStart(3)).join(" "));
}

console.log("Vetor C (número de negativos por linha):");
console.log(vetorNegativos);*/

//25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.

/*const linhas = 15;
const colunas = 20;

const matriz = [];
const somaColunas = Array(colunas).fill(0); 

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = (Math.random() * 100).toFixed(2); 
        matriz[i][j] = parseFloat(valor);
        somaColunas[j] += matriz[i][j];
    }
}

console.log("Matriz [15 x 20]:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].map(v => v.toFixed(2).padStart(6)).join(" "));
}

console.log("Soma de cada coluna:");
somaColunas.forEach((soma, index) => {
    console.log(`Coluna ${index + 1}: ${soma.toFixed(2)}`);
});*/

//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].

/*const linhas = 3;
const colunas = 5;

const A = [];
const B = [];
const P = [];

for (let i = 0; i < linhas; i++) {
    A[i] = [];
    B[i] = [];
    P[i] = [];

    for (let j = 0; j < colunas; j++) {
        A[i][j] = Math.floor(Math.random() * 9) + 1;
        B[i][j] = Math.floor(Math.random() * 9) + 1;
        P[i][j] = A[i][j] * B[i][j]; 
    }
}

function exibirMatriz(nome, matriz) {
    console.log(`Matriz ${nome}:`);
    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].map(v => v.toString().padStart(3)).join(" "));
    }
}

exibirMatriz("A", A);
exibirMatriz("B", B);
exibirMatriz("P = A x B", P);*/

//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.

/*const tamanho = 6;
const M = [];
const V = [];

const A = Number(prompt("Digite o valor escalar A: "));

let index = 0;

for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = Math.floor(Math.random() * 9) + 1;
        M[i][j] = valor;

        const produto = valor * A;
        V[index] = produto;
        index++;
    }
}

console.log("Matriz M:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(v => v.toString().padStart(3)).join(" "));
}

console.log("Vetor V (Matriz multiplicada por A):");
console.log(V.map((v, i) => v.toString().padStart(4)).join(" "));*/

/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

/*const tamanho = 10;
const M = [];

for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        M[i][j] = Math.floor(Math.random() * 20) + 1;
    }
}

let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        if (j > i) {
            somaAcima += M[i][j]; 
        } else if (j < i) {
            somaAbaixo += M[i][j]; 
        }
    }
}

console.log("Matriz M[10x10]:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(n => n.toString().padStart(3)).join(" "));
}

console.log(`Soma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);*/

/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

/*const tamanho = 5;
const M = [];

for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        M[i][j] = Math.floor(Math.random() * 20) + 1;
    }
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;
let somaTotal = 0;

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        const valor = M[i][j];
        somaTotal += valor;

        if (i === 3) somaLinha4 += valor; 
        if (j === 1) somaColuna2 += valor; 
        if (i === j) somaDiagonal += valor; 
    }
}

console.log("Matriz M[5x5]:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(n => n.toString().padStart(3)).join(" "));
}

console.log("Resultados:");
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonal}`);
console.log(`Soma de todos os elementos: ${somaTotal}`);*/

//30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.

/*const tamanho = 5;
const M = [];
const SL = Array(tamanho).fill(0); 
const SC = Array(tamanho).fill(0); 

for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = Math.floor(Math.random() * 9) + 1;
        M[i][j] = valor;

        SL[i] += valor; 
        SC[j] += valor; 
    }
}

console.log("Matriz M[5x5]:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(n => n.toString().padStart(3)).join(" "));
}

console.log("Vetor SL (soma das linhas):");
console.log(SL.join(" "));

console.log("Vetor SC (soma das colunas):");
console.log(SC.join(" "));*/

//31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.

/*const tamanho = 5; 
const M = [];
const N = [];

for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        M[i][j] = Math.floor(Math.random() * 9) + 1;
    }
}

const A = Number(prompt("Digite o valor A a ser substituído por 0 na nova matriz: "));

for (let i = 0; i < tamanho; i++) {
    N[i] = [];
    for (let j = 0; j < tamanho; j++) {
        N[i][j] = (M[i][j] === A) ? 0 : M[i][j];
    }
}

function exibirMatriz(nome, matriz) {
    console.log(`Matriz ${nome}:`);
    for (let i = 0; i < tamanho; i++) {
        console.log(matriz[i].map(v => v.toString().padStart(3)).join(" "));
    }
}

exibirMatriz("M (original)", M);
exibirMatriz("N (com A substituído por 0)", N);*/

//32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.

/*const n = 3;

const A = [];
const B = [];
const C = [];

for (let i = 0; i < n; i++) {
    A[i] = [];
    B[i] = [];
    for (let j = 0; j < n; j++) {
        A[i][j] = Math.floor(Math.random() * 5) + 1;
        B[i][j] = Math.floor(Math.random() * 5) + 1;
    }
}

for (let i = 0; i < n; i++) {
    C[i] = [];
    for (let j = 0; j < n; j++) {
        let soma = 0;
        for (let k = 0; k < n; k++) {
            soma += A[i][k] * B[k][j];
        }
        C[i][j] = soma;
    }
}

function exibirMatriz(nome, matriz) {
    console.log(`Matriz ${nome}:`);
    for (let i = 0; i < n; i++) {
        console.log(matriz[i].map(v => v.toString().padStart(3)).join(" "));
    }
}

exibirMatriz("A", A);
exibirMatriz("B", B);
exibirMatriz("C = A x B", C);*/

//33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.

/*function processarMatrizComMediaDaDiagonalSecundaria() {
  const tamanho = 3;
  const matriz = [];

  console.log("Digite os valores da matriz 3x3:");

  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      const valor = Number(prompt(`Valor na posição [${i}][${j}]: `));
      matriz[i][j] = valor;
    }
  }

  console.log("\nMatriz original:");
  console.table(matriz);

  const elementosDiagSecundaria = [];
  for (let i = 0; i < tamanho; i++) {
    elementosDiagSecundaria.push(matriz[i][tamanho - 1 - i]);
  }

  const mediaDiagSecundaria = calcularMedia(elementosDiagSecundaria);

  const novaMatriz = matriz.map((linha, i) =>
    linha.map((valor, j) => {
      if (i === j) {
        return valor * mediaDiagSecundaria;
      } else {
        return valor;
      }
    })
  );

  console.log("\nMatriz modificada:");
  console.table(novaMatriz);
}

function calcularMedia(valores) {
  const soma = valores.reduce((acc, val) => acc + val, 0);
  return soma / valores.length;
}

processarMatrizComMediaDaDiagonalSecundaria();*/

//34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.

/*function processarMatrizComMultiplicacaoPorDiagonalPrincipal() {
  const tamanho = 50;
  const matriz = [];

  console.log("Digite os valores da matriz 50x50:");
  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      const valor = parseFloat(prompt(`Valor na posição [${i}][${j}]: `));
      matriz[i][j] = valor;
    }
  }

  const matrizModificada = matriz.map((linha, i) => {
    const multiplicador = matriz[i][i]; 
    return linha.map(valor => valor * multiplicador);
  });

  console.log("Matriz após multiplicação por elementos da diagonal principal:");
  matrizModificada.slice(0, 5).forEach((linha, i) => {
    console.log(`Linha ${i}:`, linha.slice(0, 5), '...');
  });
  console.log("... (matriz completa não exibida por ser muito grande)");
}

processarMatrizComMultiplicacaoPorDiagonalPrincipal();*/

//35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.

/*function classificarNumerosEmParesEImpares() {
  const vetorPar = [];
  const vetorImpar = [];

  for (let i = 0; i < 30; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

    if (numero % 2 === 0) {
      vetorPar.push(numero);
      if (vetorPar.length === 5) {
        console.log("Vetor de pares cheio. Conteúdo:");
        console.log(vetorPar);
        vetorPar.length = 0; 
      }
    } else {
      vetorImpar.push(numero);
      if (vetorImpar.length === 5) {
        console.log("Vetor de ímpares cheio. Conteúdo:");
        console.log(vetorImpar);
        vetorImpar.length = 0; 
      }
    }
  }

  if (vetorImpar.length > 0) {
    console.log("Restaram os seguintes ímpares:");
    console.log(vetorImpar);
  }

  if (vetorPar.length > 0) {
    console.log("Restaram os seguintes pares:");
    console.log(vetorPar);
  }
}

classificarNumerosEmParesEImpares();*/

//36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".

/*function verificarApostadoresComGabarito() {
  const TOTAL_APOSTADORES = 100;
  const TAMANHO_GABARITO = 13;

  const gabarito = [];

  console.log("Digite os 13 números do gabarito:");
  for (let i = 0; i < TAMANHO_GABARITO; i++) {
    gabarito.push(parseInt(prompt(`Gabarito posição ${i + 1}: `)));
  }

  for (let apostador = 1; apostador <= TOTAL_APOSTADORES; apostador++) {
    console.log(`\n--- Apostador ${apostador} ---`);
    const numeroCartao = prompt("Número do cartão: ");
    const respostas = [];

    for (let i = 0; i < TAMANHO_GABARITO; i++) {
      respostas.push(parseInt(prompt(`Resposta ${i + 1}: `)));
    }

    let acertos = 0;

    for (let i = 0; i < TAMANHO_GABARITO; i++) {
      if (respostas[i] === gabarito[i]) {
        acertos++;
      }
    }

    console.log(`Cartão ${numeroCartao} teve ${acertos} acerto(s).`);

    if (acertos === 13) {
      console.log(" Parabéns, tu foi o GANHADOR! ");
    }
  }
}

verificarApostadoresComGabarito();*/

//37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.

/*function verificarRespostasDosAlunos() {
  const TOTAL_ALUNOS = 50;
  const TOTAL_QUESTOES = 20;

  const gabarito = [];

  console.log("Digite o gabarito da prova (20 letras):");
  for (let i = 0; i < TOTAL_QUESTOES; i++) {
    let resposta = prompt(`Questão ${i + 1}: `).toUpperCase();
    while (!["A", "B", "C", "D", "E"].includes(resposta)) {
      resposta = prompt(`Entrada inválida. Questão ${i + 1} (A-E): `).toUpperCase();
    }
    gabarito.push(resposta);
  }

  for (let aluno = 1; aluno <= TOTAL_ALUNOS; aluno++) {
    console.log(`\n--- Aluno ${aluno} ---`);
    const respostasAluno = [];

    for (let i = 0; i < TOTAL_QUESTOES; i++) {
      let resposta = prompt(`Resposta do aluno para questão ${i + 1}: `).toUpperCase();
      while (!["A", "B", "C", "D", "E"].includes(resposta)) {
        resposta = prompt(`Entrada inválida. Questão ${i + 1} (A-E): `).toUpperCase();
      }
      respostasAluno.push(resposta);
    }

    let acertos = 0;
    for (let i = 0; i < TOTAL_QUESTOES; i++) {
      if (respostasAluno[i] === gabarito[i]) {
        acertos++;
      }
    }

    console.log(`Aluno ${aluno} acertou ${acertos} questões.`);
    if (acertos >= 12) {
      console.log(" APROVADO");
    } else {
      console.log(" REPROVADO");
    }
  }
}

verificarRespostasDosAlunos();*/

/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

/*function operacoesComVetorDeSeisElementos() {
  const vetor = [];

  console.log("Digite 6 números:");
  for (let i = 0; i < 6; i++) {
    vetor.push(parseFloat(prompt(`Número ${i + 1}: `)));
  }

  console.log(`
Escolha a operação:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordenar elementos (crescente)
5 - Mostrar o vetor
  `);

  const operacao = parseInt(prompt("Digite o número da operação desejada: "));

  switch (operacao) {
    case 1:
      const soma = vetor.reduce((acc, val) => acc + val, 0);
      console.log(` Soma dos elementos: ${soma}`);
      break;

    case 2:
      const produto = vetor.reduce((acc, val) => acc * val, 1);
      console.log(` Produto dos elementos: ${produto}`);
      break;

    case 3:
      const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
      console.log(` Média dos elementos: ${media}`);
      break;

    case 4:
      const vetorOrdenado = [...vetor].sort((a, b) => a - b);
      console.log(" Vetor em ordem crescente:", vetorOrdenado);
      break;

    case 5:
      console.log(" Vetor original:", vetor);
      break;

    default:
      console.log(" Operação inválida. Use um número de 1 a 5.");
  }
}

operacoesComVetorDeSeisElementos();*/

//39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

/*function compactarVetorRemovendoZerosENegativos() {
  const vetorA = [];

  for (let i = 0; i < 100; i++) {
    const valor = Math.floor(Math.random() * 101) - 50; 
    vetorA.push(valor);
  }

  const vetorB = vetorA.filter(valor => valor > 0);

  console.log(" Vetor A (original, com negativos e zeros):");
  console.log(vetorA);

  console.log(" Vetor B (compactado, só positivos):");
  console.log(vetorB);

  console.log(` A.length = ${vetorA.length}, B.length = ${vetorB.length}`);
}

compactarVetorRemovendoZerosENegativos();*/

//40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)

/*function verificarGanhadoresDaLoto() {
  const TOTAL_APOSTADORES = 50;
  const TAMANHO_APOSTA = 5;

  const resultadoOficial = [];

  console.log("Digite os 5 números do resultado oficial da Loto:");
  while (resultadoOficial.length < TAMANHO_APOSTA) {
    const num = parseInt(prompt(`Número ${resultadoOficial.length + 1}: `));
    if (!resultadoOficial.includes(num)) {
      resultadoOficial.push(num);
    } else {
      console.log("Número repetido! Digite outro.");
    }
  }

  for (let i = 1; i <= TOTAL_APOSTADORES; i++) {
    console.log(`\n--- Aposta do Jogador ${i} ---`);
    const aposta = [];

    while (aposta.length < TAMANHO_APOSTA) {
      const num = parseInt(prompt(`Número ${aposta.length + 1}: `));
      if (!aposta.includes(num)) {
        aposta.push(num);
      } else {
        console.log("Número repetido! Digite outro.");
      }
    }

    const acertouTudo =
      aposta.length === resultadoOficial.length &&
      aposta.every(num => resultadoOficial.includes(num));

    if (acertouTudo) {
      console.log(" Ganhador! Parabéns! ");
    } else {
      console.log("Ainda não foi dessa vez...");
    }
  }
}

verificarGanhadoresDaLoto();*/

//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.

/*function manipularObjetoPessoa() {
  const pessoa = {
    nome: "Camila",
    idade: 25
  };

  console.log(`Idade da pessoa: ${pessoa.idade}`);

  pessoa.email = "camila@example.com";

  console.log("Objeto pessoa completo após adicionar o email:");
  console.log(pessoa);
}

manipularObjetoPessoa();*/

//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.

/*function filtrarPropriedadesQueSaoArrays(obj) {
  const resultado = {};

  for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }

  return resultado;
}

const dados = {
  nome: "Camila",
  idade: 25,
  hobbies: ["ler", "codar", "café"],
  notas: [8, 9.5, 10],
  cidade: "São Paulo",
  favoritos: {
    cor: "azul",
    animal: "cachorro"
  },
  cursos: ["Vue.js", "HTML", "JavaScript"]
};

const somenteArrays = filtrarPropriedadesQueSaoArrays(dados);

console.log(" Propriedades que são arrays:");
console.log(somenteArrays);*/

//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.

/*function combinarObjetosComPrecedencia(obj1, obj2) {
  return {
    ...obj1,
    ...obj2 
  };
}

const obj1 = {
  nome: "Camila",
  idade: 25,
  cidade: "São Paulo",
  linguagem: "JavaScript"
};

const obj2 = {
  idade: 30, 
  linguagem: "Vue.js", 
  email: "camila@example.com"
};

const combinado = combinarObjetosComPrecedencia(obj1, obj2);

console.log(" Objeto combinado:");
console.log(combinado);*/

//44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.

/*function contarStringsEmObjeto(obj) {
  let contador = 0;

  for (let chave in obj) {
    if (typeof obj[chave] === "string") {
      contador++;
    }
  }

  return contador;
}

const exemplo = {
  nome: "Camila",
  idade: 25,
  cidade: "São Paulo",
  linguagem: "JavaScript",
  notas: [10, 9.5],
  ativo: true,
  status: "online"
};

const totalStrings = contarStringsEmObjeto(exemplo);

console.log(` Total de propriedades do tipo string: ${totalStrings}`);*/

//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.

/*function contarFrequenciaStrings(array) {
  const contagem = {};

  for (const palavra of array) {
    if (contagem[palavra]) {
      contagem[palavra]++;
    } else {
      contagem[palavra] = 1;
    }
  }

  return contagem;
}

const palavras = [
  "vue", "javascript", "html", "vue", "css",
  "javascript", "html", "vue", "css", "vue"
];

const resultado = contarFrequenciaStrings(palavras);

console.log(" Frequência de palavras:");
console.log(resultado);*/

//46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.

/*function cadastrarVendas() {
    const vendas = [];

    console.log(" Cadastro de vendas (digite 'sair' como nome do vendedor para encerrar)");

    while (true) {
        const vendedor = prompt("Nome do vendedor: ");
        if (vendedor.toLowerCase() === "sair") break;

        const valor = Number(prompt("Valor da venda (ex: 150.50): "));
        if (isNaN(valor) || valor < 0) {
            console.log(" Valor inválido. Tente novamente.\n");
            continue;
        }

        vendas.push({ vendedor, valor });
        console.log(" Venda registrada!\n");
    }

    return vendas;
}

function totalDeVendasPorVendedor(vendas) {
    const totalPorVendedor = {};

    for (const venda of vendas) {
        const { vendedor, valor } = venda;

        if (!totalPorVendedor[vendedor]) {
            totalPorVendedor[vendedor] = 0;
        }

        totalPorVendedor[vendedor] += valor;
    }

    return totalPorVendedor;
}

const listaDeVendas = cadastrarVendas();
const resumo = totalDeVendasPorVendedor(listaDeVendas);

console.log("\n Total de vendas por vendedor:");
for (const vendedor in resumo) {
    console.log(`- ${vendedor}: R$ ${resumo[vendedor].toFixed(2)}`);
}*/

//47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.

/*function transformarObjeto(objOriginal, funcaoTransformadora) {
    const novoObjeto = {};

    for (const chave in objOriginal) {
        novoObjeto[chave] = funcaoTransformadora(objOriginal[chave]);
    }

    return novoObjeto;
}

const opcoesDeTransformacao = {
    "1": valor => valor * 2,
    "2": valor => valor ** 2,
    "3": valor => valor / 2
};

const objetoOriginal = {};
console.log(" Digite pares chave: valor numérico (digite 'sair' como chave para encerrar)");

while (true) {
    const chave = prompt("Chave: ");
    if (chave.toLowerCase() === "sair") break;

    const valor = Number(prompt("Valor: "));
    if (isNaN(valor)) {
        console.log(" Valor inválido. Digite um número.\n");
        continue;
    }

    objetoOriginal[chave] = valor;
}

console.log("\n Escolha a função de transformação:");
console.log("1 - Dobro");
console.log("2 - Ao quadrado");
console.log("3 - Metade");

const escolha = prompt("Digite o número da opção desejada: ");
const funcao = opcoesDeTransformacao[escolha] || (v => v);

const objetoTransformado = transformarObjeto(objetoOriginal, funcao);

console.log("\n Objeto original:");
console.log(objetoOriginal);

console.log("\n Objeto transformado:");
console.log(objetoTransformado);*/

//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.

/*function lerInventario(nomeLoja) {
    const inventario = {};
    console.log(`\n Cadastro de inventário da ${nomeLoja} (digite 'sair' como item para encerrar)`);

    while (true) {
        const item = prompt("Nome do item: ");
        if (item.toLowerCase() === "sair") break;

        const quantidade = Number(prompt("Quantidade em estoque: "));
        if (isNaN(quantidade) || quantidade < 0) {
            console.log(" Quantidade inválida. Tente novamente.\n");
            continue;
        }

        inventario[item] = quantidade;
    }

    return inventario;
}

function combinarInventarios(inventarioA, inventarioB) {
    const inventarioCombinado = { ...inventarioA };

    for (const item in inventarioB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioB[item];
        } else {
            inventarioCombinado[item] = inventarioB[item];
        }
    }

    return inventarioCombinado;
}

const inventarioLojaA = lerInventario("Loja A");
const inventarioLojaB = lerInventario("Loja B");

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("\n Inventário combinado:");
for (const item in inventarioFinal) {
    console.log(`- ${item}: ${inventarioFinal[item]} unidades`);
}
*/

//49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

/*function cadastrarTransacoes() {
    const transacoes = [];
    let contadorId = 1;

    console.log(" Cadastro de transações financeiras (digite 'sair' como categoria para encerrar)");

    while (true) {
        const categoria = prompt("Categoria da transação: ");
        if (categoria.toLowerCase() === "sair") break;

        const valor = Number(prompt("Valor da transação (ex: 150.75): "));
        if (isNaN(valor)) {
            console.log(" Valor inválido. Tente novamente.\n");
            continue;
        }

        const data = prompt("Data da transação (ex: 2024-06-11): ");

        transacoes.push({
            id: contadorId++,
            valor,
            data,
            categoria
        });

        console.log(" Transação registrada!\n");
    }

    return transacoes;
}

function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};

    for (const transacao of transacoes) {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                subtotal: 0,
                transacoes: []
            };
        }

        resultado[categoria].subtotal += valor;
        resultado[categoria].transacoes.push(transacao);
    }

    return resultado;
}

const transacoes = cadastrarTransacoes();
const agrupado = agruparTransacoesPorCategoria(transacoes);

console.log("\n Transações agrupadas por categoria:");
for (const categoria in agrupado) {
    const grupo = agrupado[categoria];
    console.log(`\n Categoria: ${categoria}`);
    console.log(`Subtotal: R$ ${grupo.subtotal.toFixed(2)}`);
    console.log("Transações:");
    for (const t of grupo.transacoes) {
        console.log(`  - ID: ${t.id}, Valor: R$ ${t.valor.toFixed(2)}, Data: ${t.data}`);
    }
}*/

/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
- Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
- Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

2. Funcionalidades:
- Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
- Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
- Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
- Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
- Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
- Um hotel só pode aceitar reservas se houver quartos disponíveis.
- As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais (Opcionais):
- Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
- Gerar relatórios de ocupação para um hotel.
- Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel*/

/*const hoteis = [];
const reservas = [];

let idHotelAtual = 1;
let idReservaAtual = 1;

function adicionarHotel() {
  const nome = prompt('Nome do hotel: ');
  const cidade = prompt('Cidade do hotel: ');
  const totalQuartos = parseInt(prompt('Quantidade total de quartos: '), 10);

  if (isNaN(totalQuartos) || totalQuartos <= 0) {
    console.log('Quantidade inválida de quartos.');
    return;
  }

  const novoHotel = {
    id: idHotelAtual++,
    nome,
    cidade,
    quartosTotais: totalQuartos,
    quartosDisponiveis: totalQuartos,
    avaliacoes: []
  };

  hoteis.push(novoHotel);
  console.log(`Hotel "${nome}" adicionado com sucesso!`);
}

function listarHoteisPorCidade() {
  const cidadeBusca = prompt('Digite a cidade para buscar hotéis: ').toLowerCase();

  const hoteisEncontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidadeBusca);

  if (hoteisEncontrados.length === 0) {
    console.log('Nenhum hotel encontrado nesta cidade.');
    return;
  }

  console.log(`Hotéis disponíveis em ${cidadeBusca}:`);
  hoteisEncontrados.forEach(hotel => {
    console.log(`ID: ${hotel.id} | Nome: ${hotel.nome} | Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
  });
}

function fazerReserva() {
  const idHotelReserva = parseInt(prompt('Informe o ID do hotel para reservar: '), 10);
  const hotelSelecionado = hoteis.find(hotel => hotel.id === idHotelReserva);

  if (!hotelSelecionado) {
    console.log('Hotel não encontrado.');
    return;
  }

  if (hotelSelecionado.quartosDisponiveis <= 0) {
    console.log('Não há quartos disponíveis nesse hotel.');
    return;
  }

  const nomeCliente = prompt('Nome do cliente: ');
  const novaReserva = {
    idReserva: idReservaAtual++,
    idHotel: hotelSelecionado.id,
    nomeCliente,
    status: 'reservado'
  };

  reservas.push(novaReserva);
  hotelSelecionado.quartosDisponiveis--;
  console.log(`Reserva realizada com sucesso! ID da reserva: ${novaReserva.idReserva}`);
}

function cancelarReserva() {
  const idReservaCancelar = parseInt(prompt('Informe o ID da reserva para cancelar: '), 10);
  const indexReserva = reservas.findIndex(reserva => reserva.idReserva === idReservaCancelar);

  if (indexReserva === -1) {
    console.log('Reserva não encontrada.');
    return;
  }

  const reservaCancelada = reservas[indexReserva];

  reservas.splice(indexReserva, 1);
  const hotelRelacionado = hoteis.find(hotel => hotel.id === reservaCancelada.idHotel);
  if (hotelRelacionado) {
    hotelRelacionado.quartosDisponiveis++;
  }

  console.log('Reserva cancelada com sucesso.');
}

function listarReservas() {
  if (reservas.length === 0) {
    console.log('Nenhuma reserva realizada.');
    return;
  }

  console.log('Lista de reservas:');
  reservas.forEach(reserva => {
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    console.log(`ID Reserva: ${reserva.idReserva} | Cliente: ${reserva.nomeCliente} | Hotel: ${hotel.nome} (${hotel.cidade}) | Status: ${reserva.status}`);
  });
}

function realizarCheckIn() {
  const idReservaCheckIn = parseInt(prompt('Informe o ID da reserva para fazer check-in: '), 10);
  const reserva = reservas.find(r => r.idReserva === idReservaCheckIn);

  if (!reserva) {
    console.log('Reserva não encontrada.');
    return;
  }
  if (reserva.status !== 'reservado') {
    console.log('Check-in só pode ser feito em reservas com status "reservado".');
    return;
  }

  reserva.status = 'check-in';
  console.log(`Check-in realizado para a reserva ID ${idReservaCheckIn}.`);
}

function realizarCheckOut() {
  const idReservaCheckOut = parseInt(prompt('Informe o ID da reserva para fazer check-out: '), 10);
  const reserva = reservas.find(r => r.idReserva === idReservaCheckOut);

  if (!reserva) {
    console.log('Reserva não encontrada.');
    return;
  }
  if (reserva.status !== 'check-in') {
    console.log('Check-out só pode ser feito em reservas com status "check-in".');
    return;
  }

  reserva.status = 'check-out';

  const hotelRelacionado = hoteis.find(h => h.id === reserva.idHotel);
  if (hotelRelacionado) {
    hotelRelacionado.quartosDisponiveis++;
  }
  console.log(`Check-out realizado para a reserva ID ${idReservaCheckOut}.`);
}

function gerarRelatorioOcupacao() {
  const idHotelRelatorio = parseInt(prompt('Informe o ID do hotel para relatório de ocupação: '), 10);
  const hotel = hoteis.find(h => h.id === idHotelRelatorio);

  if (!hotel) {
    console.log('Hotel não encontrado.');
    return;
  }

  const ocupados = hotel.quartosTotais - hotel.quartosDisponiveis;
  const ocupacaoPercentual = ((ocupados / hotel.quartosTotais) * 100).toFixed(2);

  console.log(`Relatório de ocupação para o hotel "${hotel.nome}":`);
  console.log(`Quartos totais: ${hotel.quartosTotais}`);
  console.log(`Quartos ocupados: ${ocupados}`);
  console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
  console.log(`Ocupação: ${ocupacaoPercentual}%`);
}

function avaliarHotel() {
  const idHotelAvaliar = parseInt(prompt('Informe o ID do hotel para avaliar: '), 10);
  const hotel = hoteis.find(h => h.id === idHotelAvaliar);

  if (!hotel) {
    console.log('Hotel não encontrado.');
    return;
  }

  const nomeCliente = prompt('Informe seu nome (deve ter uma reserva concluída neste hotel): ');
  const reservaCliente = reservas.find(r => r.idHotel === hotel.id && r.nomeCliente.toLowerCase() === nomeCliente.toLowerCase() && r.status === 'check-out');

  if (!reservaCliente) {
    console.log('Você só pode avaliar o hotel após concluir uma estadia (check-out).');
    return;
  }

  const nota = parseInt(prompt('Avaliação (1 a 5): '), 10);
  if (isNaN(nota) || nota < 1 || nota > 5) {
    console.log('Avaliação inválida. Deve ser entre 1 e 5.');
    return;
  }

  const comentario = prompt('Comentário (opcional): ');

  hotel.avaliacoes.push({ cliente: nomeCliente, nota, comentario });
  console.log('Avaliação registrada com sucesso!');
}

function listarAvaliacoes() {
  const idHotelAvaliacoes = parseInt(prompt('Informe o ID do hotel para ver avaliações: '), 10);
  const hotel = hoteis.find(h => h.id === idHotelAvaliacoes);

  if (!hotel) {
    console.log('Hotel não encontrado.');
    return;
  }

  if (hotel.avaliacoes.length === 0) {
    console.log('Nenhuma avaliação para este hotel.');
    return;
  }

  console.log(`Avaliações do hotel "${hotel.nome}":`);
  hotel.avaliacoes.forEach((av, i) => {
    console.log(`${i + 1}. Cliente: ${av.cliente} | Nota: ${av.nota} | Comentário: ${av.comentario || 'Sem comentário'}`);
  });
}


function menu() {
  console.log('\n=== Sistema de Reserva de Hotéis ===');
  console.log('1 - Adicionar hotel');
  console.log('2 - Buscar hotéis por cidade');
  console.log('3 - Fazer reserva');
  console.log('4 - Cancelar reserva');
  console.log('5 - Listar reservas');
  console.log('6 - Fazer check-in');
  console.log('7 - Fazer check-out');
  console.log('8 - Gerar relatório de ocupação');
  console.log('9 - Avaliar hotel');
  console.log('10 - Listar avaliações de hotel');
  console.log('0 - Sair');

  const opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      adicionarHotel();
      break;
    case '2':
      listarHoteisPorCidade();
      break;
    case '3':
      fazerReserva();
      break;
    case '4':
      cancelarReserva();
      break;
    case '5':
      listarReservas();
      break;
    case '6':
      realizarCheckIn();
      break;
    case '7':
      realizarCheckOut();
      break;
    case '8':
      gerarRelatorioOcupacao();
      break;
    case '9':
      avaliarHotel();
      break;
    case '10':
      listarAvaliacoes();
      break;
    case '0':
      console.log('Saindo...');
      return false;
    default:
      console.log('Opção inválida.');
  }
  return true;
}

function executarSistema() {
  let continuar = true;
  while (continuar) {
    continuar = menu();
  }
}

executarSistema();*/