// Escreva seu código aqui!
//let outraCoisa: number;
//console.log((outraCoisa = 0 / 0));

//let meuTexto: string;
//meuTexto = '\nPrimeira linha\nSegunda linha';
//console.log(meuTexto);

//let valorNulo: null = null; // valorNulo é do tipo null
//console.log(valorNulo);

//const numeroGrande: bigint = 1234567890123456789012345678901234567890n;
//console.log(numeroGrande); // 1234567890123456789012345678901234567890n

const numJanelas: number = 3;
console.log(`Possuem ${numJanelas} Janelas na sala.`);

let nomeComputador: string;
nomeComputador = 'Elderg';
console.log(`O nome do meu computador é: ${nomeComputador}.`);

let arCondicionado: boolean;
arCondicionado = true;
console.log(`O ar condicionado está ligado? ${arCondicionado}.`);

let custoSala;
console.log(`O custo da construção da Sala é: ${custoSala}.`);

interface Garrafa {
    marca: string;
    ml: number;
    tampa: boolean;
    volume: undefined;
}

let garrafa: Garrafa = {
    marca: 'Mary waters',
    ml: 30,
    tampa: true,
    volume: undefined
};

console.log(garrafa);
