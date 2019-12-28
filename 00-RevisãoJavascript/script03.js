// Laço de repetição For
for (var i = 0; i < 10; i++) {
    // verifica a variavel local i. se menor que 10 executa.
    console.log('Esta é a execução ', i);
};

// Laço de repetição While
var num = 1;

while (num < 10) {
    // verifica se a variavel num é menor que 10. se menor executa e acrescenta.
    console.log('executou mais 1');
    num += 1;
};

/**
 * Obs: Usamos o laço For quando sabemos exatamente o numero de vezes que o laço deve acontecer
 * Laços whiles são indicados quando não temos a precisão de que momento o mesmo deve ser interrompido.
 * Exemplo abaixo:
 */
var j = 2342;
while (j > 50) {
    // enquanto j for maior que 50 mostramos e dividimos o valor para testarmos novamente. 
    console.log('mostrando j = ', j);
    j /= 5;
};
