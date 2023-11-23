const { performance } = require("perf_hooks");

function computacaoIntensiva() {
  let resultado = 0;

  for (let i = 0; i < 50e9; i++) {
    resultado += Math.sqrt(i);
  }

  return resultado;
}

const start = performance.now();
const resultado = computacaoIntensiva();
const end = performance.now();

console.log(`resultado: ${resultado}`);
console.log(`Tempo de execução: ${end - start} milissegundos`);
