// Intervalo - executa chamadas a cada intervalo de tempo definido
function executa(){
    console.log('executou');
};

/**
 * Usamos o argumento em milesegundos.
 */
setInterval(executa, 1000);

// TimeOut - executa uma chamada após um intervalo definido.
setTimeout(executa, 10000);
