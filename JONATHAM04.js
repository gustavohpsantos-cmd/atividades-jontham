const precoOriginal = 250.00;
const percentualDesconto = 15; // Significa 15%

const valorDesconatdo = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconatdo;

const economiaReais = valorDesconatdo;

console.log(`=== RECIBO DE COMPRA ===`);
console.log(`Preço Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Desconto Aplicado: ${percentualDesconto}%`);
console.log(`Valor do Desconto: R$ ${valorDesconatdo.toFixed(2)}`);
console.log(`Preço Final: R$ ${precoFinal.toFixed(2)}`);
console.log(`Você economizou: R$ ${economiaReais.toFixed(2)}`);