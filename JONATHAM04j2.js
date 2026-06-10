const salarioBase = 3200.00;
const percentualBonus = 12; // Significa 12%

const valorBonus = salarioBase * (percentualBonus / 100);
const salarioFinal = salarioBase + valorBonus;

const aumentoPercentual = percentualBonus;

console.log(`=== FOLHA DE PAGAMENTO ===`);
console.log(`Salário Base: R$ ${salarioBase.toFixed(2)}`);
console.log(`Bônus: ${percentualBonus}%`);
console.log(`Valor do Bônus: R$ ${valorBonus.toFixed(2)}`);
console.log(`Salário Final: R$ ${salarioFinal.toFixed(2)}`);
console.log(`Aumento Percentual Total: ${aumentoPercentual}%`);
