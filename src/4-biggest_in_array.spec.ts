/**
 * Maior Número em um Array:
 *
 * Escreva uma função que receba um array de números e
 * retorne o maior número encontrado no array.
 *
 * Exemplo:
 * - Para o array [1, 2, 3, 4, 5], a saída deve ser 5.
 * - Para o array [10, 3, 19, 7, 6], a saída deve ser 19.
 * - Para o array [3, 2, 1], a saída deve ser 3.
 */

function biggestInArray(numbers: number[]) {
  // implemente sua lógica aqui
}

// Execute seus testes 👇

describe("Maior Número em um Array", () => {
  test("Array [1, 2, 3, 4, 5]", () => {
    expect(biggestInArray([1, 2, 3, 4, 5])).toBe(5);
  });

  test("Array [10, 3, 19, 7, 6]", () => {
    expect(biggestInArray([10, 3, 19, 7, 6])).toBe(19);
  });

  test("Array [3, 2, 1]", () => {
    expect(biggestInArray([3, 2, 1])).toBe(3);
  });
});
