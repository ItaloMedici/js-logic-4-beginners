/**
 * Conversão de Temperatura:
 *
 * Crie duas funções, uma para converter Celsius para Fahrenheit e
 * outra para converter Fahrenheit para Celsius.
 *
 * A fórmula para conversão de Celsius para Fahrenheit é:
 * - Fahrenheit = Celsius * 9/5 + 32
 *
 * A fórmula para conversão de Fahrenheit para Celsius é:
 * - Celsius = (Fahrenheit - 32) * 5/9
 *
 * Exemplo:
 * - Para a função que converte Celsius para Fahrenheit, a entrada 0 deve retornar 32.
 * - Para a função que converte Fahrenheit para Celsius, a entrada 32 deve retornar 0.
 */

function celsiusToFahrenheit(celsius: number) {
  // implemente sua lógica aqui
}

function fahrenheitToCelsius(fahrenheit: number) {
  // implemente sua lógica aqui
}

// Execute seus testes 👇

describe("Conversão de Temperatura", () => {
  test("Celsius para Fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  test("Fahrenheit para Celsius", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
});
