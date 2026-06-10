const custoAquisicao = 40.00;
const precoVenda = 75.00;

const lucroObtido = precoVenda - custoAquisicao;

const margemLucro = (lucroObtido / custoAquisicao) * 100;

console.log(`=== ANÁLISE DE VENDA ===`);
console.log(`Custo do Produto: R$ ${custoAquisicao.toFixed(2)}`);
console.log(`Preço de Venda: R$ ${precoVenda.toFixed(2)}`);
console.log(`Lucro Obtido: R$ ${lucroObtido.toFixed(2)}`);
console.log(`Margem de Lucro: ${margemLucro.toFixed(2)}%`);