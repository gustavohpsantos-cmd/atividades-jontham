const distanciaTotalKm = 360; 
const consumoMedioKmL = 12;   
const precoCombustivelLitro = 5.89; 

const combustivelNecessario = distanciaTotalKm / consumoMedioKmL;
const custoTotalEstimado = combustivelNecessario * precoCombustivelLitro;

const custoIdaVolta = custoTotalEstimado * 2;

console.log(`=== PLANEJAMENTO DE VIAGEM ===`);
console.log(`Distância: ${distanciaTotalKm} km`);
console.log(`Consumo Médio: ${consumoMedioKmL} km/L`);
console.log(`Combustível Necessário: ${combustivelNecessario.toFixed(2)} L`);
console.log(`Custo Estimado (Só Ida): R$ ${custoTotalEstimado.toFixed(2)}`);
console.log(`Custo Estimado (Ida e Volta): R$ ${custoIdaVolta.toFixed(2)}`);