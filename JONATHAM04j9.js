const valorConta = 180.00;
const percentualGorjeta = 10; // 10%
const quantidadePessoas = 4; // Desafio Adicional

const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotalComGorjeta = valorConta + valorGorjeta;

const valorPorPessoa = valorTotalComGorjeta / quantidadePessoas;

console.log(`=== CONTA DO RESTAURANTE ===`);
console.log(`Consumo: R$ ${valorConta.toFixed(2)}`);
console.log(`Gorjeta (${percentualGorjeta}%): R$ ${valorGorjeta.toFixed(2)}`);
console.log(`Total Geral: R$ ${valorTotalComGorjeta.toFixed(2)}`);
console.log(`---------------------------------`);
console.log(`Dividido por ${quantidadePessoas} pessoas: R$ ${valorPorPessoa.toFixed(2)} por pessoa`);