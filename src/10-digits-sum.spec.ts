/**
 * Soma dos Dígitos de um Número:
 *
 * Escreva uma função que receba um número e retorne a soma de seus dígitos.
 *
 * Exemplo:
 * - Para o número 123, a saída deve ser 6 (1 + 2 + 3).
 * - Para o número 555, a saída deve ser 15 (5 + 5 + 5).
 * - Para o número 963, a saída deve ser 18 (9 + 6 + 3).
 *
 * É possivel resolver este exercício sem o uso de strings?
 */

function digitsSum(number: number) {
  // implemente sua lógica aqui
}

// Execute seus testes 👇

describe("Soma dos Dígitos de um Número", () => {
  test("Número 123", () => {
    expect(digitsSum(123)).toBe(6);
  });

  test("Número 555", () => {
    expect(digitsSum(555)).toBe(15);
  });

  test("Número 963", () => {
    expect(digitsSum(963)).toBe(18);
  });
});
