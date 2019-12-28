// Funções - criação e chamada
function somarNum(valor1, valor2) {
    return valor1 + valor2;
};

// chamando a função criada diretamente no console.
console.log(somarNum(2, 5));

// Estrutura de Decisão IF / Else
var estado = 'sp';

if (estado === 'rj') {
    console.log('Você mora no Rio de Janeiro');
} else {
    console.log('Você mora em São Paulo');
};

// Estrutura de Decisão Switch (multiplos casos)
var numero = 3;

switch (numero) {
    case 1: return console.log('voce digitou 1');
    case 2: return console.log('você digitou 2');
    case 3: return console.log('voce digitou 3');
    default: return console.log('voce digitou outros valores');
};
