const qtdBitcoin = 0.045;
const precoAtualBtc = 380000.00;
const valorOriginalInvestido = 12000.00; // Desafio: Quanto gastei para comprar

const valorTotalReais = qtdBitcoin * precoAtualBtc;

const lucroPrejuizo = valorTotalReais - valorOriginalInvestido;
const rentabilidadeBtc = (lucroPrejuizo / valorOriginalInvestido) * 100;

console.log(`=== CARTEIRA DE CRIPTOMOEDAS ===`);
console.log(`Quantidade: ${qtdBitcoin} BTC`);
console.log(`Preço Atual do BTC: R$ ${precoAtualBtc.toFixed(2)}`);
console.log(`Valor Total Atual: R$ ${valorTotalReais.toFixed(2)}`);
console.log(`---------------------------------`);
console.log(`Valor Investido Original: R$ ${valorOriginalInvestido.toFixed(2)}`);
console.log(`Lucro/Prejuízo: R$ ${lucroPrejuizo.toFixed(2)}`);
console.log(`Rentabilidade: ${rentabilidadeBtc.toFixed(2)}%`);