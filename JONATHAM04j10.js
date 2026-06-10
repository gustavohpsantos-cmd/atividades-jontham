
const valorMoedaEstrangeira = 800; 
const taxaCambioAtual = 5.45;
const taxaCambioCompra = 5.00;


const valorConvertidoReais = valorMoedaEstrangeira * taxaCambioAtual;


const valorInvestidoOriginal = valorMoedaEstrangeira * taxaCambioCompra;
const lucroVariacaoCambial = valorConvertidoReais - valorInvestidoOriginal;
const rentabilidadeCambial = (lucroVariacaoCambial / valorInvestidoOriginal) * 100;


console.log(`=== MONITORAMENTO CAMBIAL ===`);
console.log(`Montante Estrangeiro: $ ${valorMoedaEstrangeira.toFixed(2)}`);
console.log(`Taxa de Câmbio Atual: R$ ${taxaCambioAtual.toFixed(2)}`);
console.log(`Valor Equivalente Atual: R$ ${valorConvertidoReais.toFixed(2)}`);
console.log(`---------------------------------`);
console.log(`Lucro por Variação Cambial: R$ ${lucroVariacaoCambial.toFixed(2)}`);
console.log(`Rentabilidade do Câmbio: ${rentabilidadeCambial.toFixed(2)}%`);