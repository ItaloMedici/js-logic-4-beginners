# Documentação de Conceitos Básicos de JavaScript

## 1. Funções em JavaScript

As funções são blocos de construção fundamentais em JavaScript. Elas são usadas para realizar uma tarefa específica ou calcular um valor. Em JavaScript, as funções podem ser definidas de várias maneiras, incluindo declarações de função e expressões de função.

```javascript
// Declaração de Função
function soma(a, b) {
  return a + b;
}

// Expressão de Função
const subtracao = function (a, b) {
  return a - b;
};
```

## 2. Arrays em JavaScript
Arrays são objetos que armazenam uma coleção de elementos. Em JavaScript, os arrays podem conter qualquer tipo de dado, inclusive outros arrays.

```javascript
  const numeros = [1, 2, 3, 4, 5];
  const nomes = ['João', 'Maria', 'Pedro'];
  const matriz = [[1, 2], [3, 4]];
```

## 3. Estruturas Condicionais (if-else) em JavaScript
As estruturas condicionais permitem que você tome decisões com base em condições específicas. O bloco if é usado para executar um bloco de código se uma condição for verdadeira. O bloco else é executado se a condição do if for falsa.

```javascript
const idade = 18;

if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}
```

## 4. Loops em JavaScript
Loops são usados para executar um bloco de código várias vezes. O loop for é comumente usado quando você sabe quantas vezes deseja que o código seja repetido.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Saída:
// 0, 1, 2, 3, 4
```
Loop para iterar sobre um array

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
  console.log(numero);
});

// Saída:
// 1, 2, 3, 4, 5
```

## 5. Escopo em JavaScript
O escopo em JavaScript refere-se à acessibilidade de variáveis. As variáveis podem ser declaradas no escopo global ou local. Variáveis declaradas fora de qualquer função têm escopo global, enquanto as declaradas dentro de uma função têm escopo local.

```javascript
const global = 'Variável Global';

function exemplo() {
  const local = 'Variável Local';
  console.log(global); // Acesso à variável global dentro da função
  console.log(local); // Acesso à variável local dentro da função
}

console.log(global); // ✅ Acesso à variável global fora da função
console.log(local); // ❌ Isso resultará em um erro, pois local está fora do escopo
```

## 6. Operadores Aritméticos em JavaScript
Os operadores aritméticos são usados para executar operações matemáticas em variáveis. Eles incluem adição +, subtração -, multiplicação *, divisão /, entre outros.

```javascript
const a = 10;
const b = 5;

console.log(a + b); // Soma: 15
console.log(a - b); // Subtração: 5
console.log(a * b); // Multiplicação: 50
console.log(a / b); // Divisão: 2
console.log(a % b); // Resto da divisão: 0
```

## 7. Objetos em JavaScript
Objetos são usados para armazenar uma coleção de dados e mais informações sobre eles. Em JavaScript, os objetos são compostos por pares de chave-valor, onde cada chave é uma string (também chamada de propriedade) e cada valor pode ser qualquer tipo de dado.

```javascript
const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo'
};

console.log(pessoa.nome); // Acessando a propriedade nome do objeto pessoa
console.log(pessoa["idade"]); // Acessando a propriedade idade do objeto pessoa
console.log(pessoa.cidade); // Acessando a propriedade cidade do objeto pessoa
```

## 8. Classes em JavaScript
Classes são uma maneira de criar objetos reutilizáveis com métodos e propriedades. Elas são consideradas uma forma especial de função e são definidas usando a palavra-chave class.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa('João', 25);
console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 25 anos.
```

## 9. Tratamento de Exceções (try-catch) em JavaScript
O bloco try é usado para testar um bloco de código em busca de erros. O bloco catch é usado para lidar com erros.

```javascript
try {
  const resultado = 10 / 0;
  console.log(resultado);
} catch (erro) {
  console.log('Ocorreu um erro: ' + erro);
}
```

## 10. Métodos de Array em JavaScript
Os arrays em JavaScript possuem vários métodos integrados que permitem manipular, percorrer e modificar os elementos do array.

```javascript
const numeros = [1, 2, 3, 4, 5];
// Método push()
numeros.push(6);
// Adiciona o número 6 ao final do array

// Método pop()
numeros.pop();
// Remove o último elemento do array

// Método shift()
numeros.shift();
// Remove o primeiro elemento do array

// Método unshift()
numeros.unshift(0);
// Adiciona o número 0 no início do array

// Método splice()
numeros.splice(2, 1);
// Remove 1 elemento a partir do índice 2 do array

// Método slice()
const novoArray = numeros.slice(1, 4);
// Cria um novo array com os elementos do índice 1 ao 3 do array original

// Método concat()
const outroArray = [7, 8, 9];
const arrayConcatenado = numeros.concat(outroArray);
// Concatena o array original com outro array

// Método indexOf()
const indice = numeros.indexOf(3);
// Retorna o índice do primeiro elemento igual a 3 no array

// Método includes()
const contem = numeros.includes(4);
// Verifica se o array contém o elemento 4

// Método join()
const stringArray = numeros.join(', ');
// Converte o array em uma string separada por vírgulas

// Método reverse()
numeros.reverse();
// Inverte a ordem dos elementos do array

// Método sort()
numeros.sort();
// Ordena os elementos do array em ordem crescente

// Método map()
const novoArray = numeros.map((numero) => numero * 2);
// Cria um novo array com os elementos do array original multiplicados por 2

// Método filter()
const novoArray = numeros.filter((numero) => numero > 3);
// Cria um novo array com os elementos do array original que são maiores que 3

// Método reduce()
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// Retorna a soma de todos os elementos do array
```