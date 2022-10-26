// estruturas condicionais 
// estrutura decisão 
 
// usando o if else 
var jogador1 = 0;
var jogador2 = 0;
var placar2;

if(jogador1 > 0) {
    console.log('jogador1 marcou ponto');
} else if (jogador2 > 0){

    console.log('jogador2 marcou ponto');
} else {
    console.log('ninguém marcou ponto');
}
//aninhnado if's
// if ternario
jogador1 != -1 && jogador2 != - 1?
console.log('os jogador são validos') :
console.log('os jogadores não são validos');

if(jogador1 > 0 && jogador2 == 0){
   console.log('o jogador 1 marcou pomto');
   placar = jogador1 > jogador2;
}
//usando o if else 

else if(jogador2 > 0 && jogador1== 0){
    console.log('o jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
//usando o else

else {
    console.log('ninguem marcou ponto');
}
var vasco = 0;
var mengão = 1;
var placar;

// usando switch case
switch(placar) {
 
    
    case placar = vasco > mengão;
        console.log('vasco ganhou velho q foda')
        break;

        case placar = mengão > vasco:
        console.log('TAPORRRRRAAAAAAAA MENGO SOLO O VASCO AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CHUPA BRENO' )
        break;

        default:
        console.log('ninguem ganhou que bosta...')
        break;0


    //estrutura de repetição
    let array = ['valor2 ','valor2','valor3','valor4'];
    //for - executa até que seja false
    for (let i = 0; i <= array.length; i++) {
        console.log(i);

    }
    //for/in - executa repetica a partir de uma propriedade
    //com array
    for (i in array){
        console.log(i);
    }

    //com object 
    for (i in lucas){
        console.log(i)

    }

    //while - executa enquanto for verdadeira 
    var a = 0;
    while (a < 10){
        a++;
        console.log(a);
    }
    
    // do - executa até que seja falsa
    console. log ('==================================')
    var b = 0;
    do{
        b++
        console.log(b)
    } while (b < 10);