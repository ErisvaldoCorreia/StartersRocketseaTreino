// Operadores lógicos - And (&&)
var idade = 18;
var festa = 'adulta';

// se a idade for maior que 18 E a festa for adulta ele pode entrar.
// só entra no laço if se as duas condições forem atendidas.
if (idade >= 18 && festa === 'adulta') {
    console.log('Pode entrar na festa');
} else {
    console.log('Desculpe, não pode entrar!');
};

// Operadores Lógicos - Or (||)
var idade = 17;
var desejo = 'não';

// se a idade for maior que 18 OU a vontade for sim, então vota
// entra no if caso uma ou outra condição seja atendida.
if (idade >= 18 || desejo === 'sim') {
    console.log('Ok, pode votar');
} else {
    console.log('Não vai votar');
};
