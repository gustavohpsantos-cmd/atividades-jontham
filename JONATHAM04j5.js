const valorInicial = 5000.00;
const valorAtual = 6200.00;
const mesesAplicado = 18; // Usado para o desafio adicional

const lucroObtido = valorAtual - valorInicial;
const rentabilidadePercentual = (lucroObtido / valorInicial) * 100;

const rentabilidadeAnual = (rentabilidadePercentual / mesesAplicado) * 12;

console.log(`=== RENDIMENTO DO INVESTIMENTO ===`);
console.log(`Valor Inicial: R$ ${valorInicial.toFixed(2)}`);
console.log(`Valor Atual: R$ ${valorAtual.toFixed(2)}`);
console.log(`Lucro Realizado: R$ ${lucroObtido.toFixed(2)}`);
console.log(`Rentabilidade Total: ${rentabilidadePercentual.toFixed(2)}%`);
console.log(`Rentabilidade Anual Estimada: ${rentabilidadeAnual.toFixed(2)}%`);