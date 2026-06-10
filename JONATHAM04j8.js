const tempCelsius = 25;
const tempKelvinTeste = 300; // Usado para testar o desafio opcional

const convertidoParaKelvin = tempCelsius + 273.15;

const convertidoParaCelsius = tempKelvinTeste - 273.15;

console.log(`=== CONVERSOR DE TEMPERATURA ===`);
console.log(`${tempCelsius}°C equivale a ${convertidoParaKelvin.toFixed(2)} K`);
console.log(`${tempKelvinTeste} K equivale a ${convertidoParaCelsius.toFixed(2)}°C`);