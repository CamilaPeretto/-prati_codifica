/*CODIFICA- FORMAÇÃO DESENVOLVEDOR FULL STACK JÚNIOR*/

// Instala o node.js e o npm no seu navegador.
// Instala a extensão "code runner" e configure para ela rodar no seu terminal
//Para executar essa lista de exercícios faz o comando "npm install prompt=sync" no terminal command prompt para instalar as dependências necessárias.
//Deixei comentado os exercícios, para executar um de cada vez, basta descomentar o exercício desejado.

const prompt = require("prompt-sync")();

//Seção 1: Estruturas de Controle Avançadas
//1. Validação de Datas
//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

/*function anoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

function ehDataValida(dia, mes, ano) {

   if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
     console.log(" Números inválidos! Digite apenas números.");
    return false;
  }

  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
     console.log(" Valores fora do intervalo permitido.");
    return false;
  }

  let diasPorMes;

   if (anoBissexto(ano)) {
    diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  if (dia <= diasPorMes[mes - 1]) {
    return true;
  } else {
    console.log(" O dia informado não existe nesse mês.");
    return false;
  }
}

let dataValida = false;

while (!dataValida) {
  const dia = parseInt(prompt("Digite o dia: "));
  const mes = parseInt(prompt("Digite o mês: "));
  const ano = parseInt(prompt("Digite o ano: "));

  dataValida = ehDataValida(dia, mes, ano);
}

console.log(" A data é válida!");*/

//2. Jogo de Adivinhação
//Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

/*const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativa;
let tentativas = 0;

while (tentativa !== numeroSecreto) {
  tentativa = parseInt(prompt("🔢 Tente adivinhar o número (entre 1 e 100): "));
  tentativas++;

  if (isNaN(tentativa)) {
    console.log(" Digite um número válido!");
    continue; 
  }

  if (tentativa < 1 || tentativa > 100) {
    console.log(" O número deve estar entre 1 e 100.");
  } else if (tentativa < numeroSecreto) {
    console.log(" Mais alto!");
  } else if (tentativa > numeroSecreto) {
    console.log(" Mais baixo!");
  } else {
    console.log(` Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
  }
}*/

//3. Palavras Únicas
//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

/*const frase = prompt("Digite uma frase: ");

let textoLimpo = frase.toLowerCase();

textoLimpo = textoLimpo.replace(/[^\w\s]/g, "");

textoLimpo = textoLimpo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const palavras = frase.split(" ");
const unicas = [];

for (let palavra of palavras) {

  if (palavra !== "" && !unicas.includes(palavra)) {
    unicas.push(palavra);
  }
}

console.log(" Palavras únicas:", unicas);*/

//Seção 2: Funções e Recursão
//4. Fatorial Recursivo
//Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

/*function fatorial(n) {
  if (isNaN(n)) {
    throw new Error("O valor precisa ser um número.");
  }

  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

try {
  const numero = parseInt(prompt("Digite um número inteiro não-negativo: "));
  const resultado = fatorial(numero);
  console.log(` O fatorial de ${numero} é: ${resultado}`);
} catch (erro) {
  console.log(" Erro:", erro.message);
}*/

//5. Debounce
//Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

/*function debounce(fn, delay) {
  let timerId; 

  return function (...args) {
    
    clearTimeout(timerId);

    
    timerId = setTimeout(() => {
      fn(...args); 
    }, delay);
  };
}
  function buscar(termo) {
  console.log(` Buscando por: ${termo}`);
}

const buscaComDebounce = debounce(buscar, 2000);

console.log("Digite termos de busca (digite 'sair' para encerrar):");

while (true) {
  const termo = prompt("Pesquisar: ");

  if (termo.toLowerCase() === "sair") {
    console.log("Encerrando...");
    break;
  }

  buscaComDebounce(termo);
}*/

//6. Memoization
//Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

/*function fatorial(n) {
  console.log(` Calculando fatorial de ${n}...`);
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args); 

    if (cache[chave]) {
      console.log("Resultado vindo do cache!");
      return cache[chave];
    }

    const resultado = fn(...args); 
    cache[chave] = resultado; 
    return resultado;
  };
}
  
const fatorialMemo = memoize(fatorial);

console.log("Digite um número para calcular o fatorial. Digite 'sair' para encerrar.");

while (true) {
  const entrada = prompt("Número: ");

  if (entrada.toLowerCase() === "sair") {
    console.log("Encerrando...");
    break;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero) || numero < 0) {
    console.log(" Digite um número inteiro não-negativo.");
    continue;
  }

  const resultado = fatorialMemo(numero);
  console.log(` Fatorial de ${numero} é ${resultado}\n`);
}*/

//Seção 3: Arrays e Objetos Complexos
//7. Mapeamento e Ordenação
//Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

/*function nomesOrdenadosPorPreco(produtos) {
  const ordenados = produtos.sort((a, b) => a.preco - b.preco);
  const nomes = ordenados.map(produto => produto.nome);
  return nomes;
}

console.log("Digite os produtos. Quando quiser parar, digite 'sair' no nome.");

const produtos = [];

while (true) {
  const nome = prompt("Nome do produto: ");

  if (nome.toLowerCase() === "sair") break;

  const preco = parseFloat(prompt("Preço do produto: "));

  if (isNaN(preco) || preco < 0) {
    console.log(" Preço inválido. Tente novamente.");
    continue;
  }

  produtos.push({ nome, preco });
}

if (produtos.length === 0) {
  console.log("Nenhum produto foi inserido.");
} else {
  const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
  console.log("\n Produtos ordenados por preço (do mais barato ao mais caro):");
  nomesOrdenados.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));
  }*/

//8. Agrupamento por Propriedade
//Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

/*function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const cliente = venda.cliente;
    const total = venda.total;

    if (!acumulador[cliente]) {
      acumulador[cliente] = 0;
    }

    acumulador[cliente] += total;
    return acumulador;
  }, {});
}

console.log("Digite os dados de venda. Digite 'sair' no nome para encerrar.");

const vendas = [];

while (true) {
  const cliente = prompt("Nome do cliente: ");
  if (cliente.toLowerCase() === "sair") break;

  const total = parseFloat(prompt("Valor da venda: "));
  if (isNaN(total) || total < 0) {
    console.log(" Valor inválido. Tente novamente.");
    continue;
  }

  vendas.push({ cliente, total });
}

if (vendas.length === 0) {
  console.log("Nenhuma venda registrada.");
} else {
  const resultado = agruparVendasPorCliente(vendas);
  console.log("\n Total de vendas por cliente:");
  for (let cliente in resultado) {
    console.log(`- ${cliente}: R$ ${resultado[cliente].toFixed(2)}`);
  }
}*/

/*9. Conversão Entre Formatos
Escreva duas funções:
- paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.

- objetoParaPares(obj) faz o inverso, retornando um array de pares*/

/*function paresParaObjeto(pares) {
  const obj = {};
  for (let [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

console.log("Digite pares no formato chave e valor. Digite 'sair' na chave para encerrar.");

const pares = [];

while (true) {
  const chave = prompt("Chave: ");
  if (chave.toLowerCase() === "sair") break;

  const valor = prompt("Valor: ");
  pares.push([chave, valor]);
}

const objeto = paresParaObjeto(pares);
console.log("Objeto gerado a partir dos pares:");
console.log(objeto);

const paresNovos = objetoParaPares(objeto);
console.log("Pares extraídos do objeto:");
console.log(paresNovos);*/