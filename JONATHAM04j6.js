
const posicaoInicial = 20; // em metros (s0)
const velocidadeConstante = 15; // em m/s (v)
const tempoDeslocamento = 10; // em segundos (t)

const posicaoFinal = posicaoInicial + (velocidadeConstante * tempoDeslocamento);

const distanciaPercorrida = velocidadeConstante * tempoDeslocamento;

console.log(`=== SIMULAÇÃO DE FÍSICA (MRU) ===`);
console.log(`Posição Inicial (s₀): ${posicaoInicial} metros`);
console.log(`Velocidade (v): ${velocidadeConstante} m/s`);
console.log(`Tempo (t): ${tempoDeslocamento} segundos`);
console.log(`Posição Final (s): ${posicaoFinal} metros`);
console.log(`Distância Total Percorrida: ${distanciaPercorrida} metros`);