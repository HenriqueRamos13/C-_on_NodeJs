const addon = require("./build/Release/ComputacaoIntensiva.node");

const { performance } = require("perf_hooks");

console.log("Iniciando a execução...");

// Inicia o temporizador
const start = performance.now();

// Chama a função calcularFatorial do módulo C++
const resultado = addon.ComputacaoIntensiva();

// Finaliza o temporizador
const end = performance.now();

console.log(`Fatorial de 100: ${resultado}`);
console.log(`Tempo de execução: ${end - start} milissegundos`);
