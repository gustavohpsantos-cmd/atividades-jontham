// 1. Entradas (Altere os valores para testar!)
const precoOriginal = 250.00;
const percentualDesconto = 15; // Significa 15%

// 2. Processamento (Cálculos)
const valorDesconatdo = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconatdo;

// [Desafio Adicional] A economia em reais é o próprio valor do desconto
const economiaReais = valorDesconatdo;

// 3. Saída de Dados
console.log(`=== RECIBO DE COMPRA ===`);
console.log(`Preço Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Desconto Aplicado: ${percentualDesconto}%`);
console.log(`Valor do Desconto: R$ ${valorDesconatdo.toFixed(2)}`);
console.log(`Preço Final: R$ ${precoFinal.toFixed(2)}`);
console.log(`Você economizou: R$ ${economiaReais.toFixed(2)}`);