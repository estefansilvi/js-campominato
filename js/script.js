
function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  var result= Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso

  return result;

}

// facciamo generare al computer 16  numeri a random tra 1 e 100
var numberBomb=[];

for (var i = 0; i < 16; i++) {

  var numeroInserito = getRandomInt(1,100);
  numberBomb.push(numeroInserito)
}

console.log(numberBomb);

// chiedo all'utente di inserire per 16 volte massimo un numero tra 1 100

var numeriUtente = [];
var bombaColpita = false;
var numeroInseritoDoppio = false;
for (x = 0; x < 10; x++) {   // TODO: Sostituire il 10 con 84
    var number = parseInt(prompt('inserire un numero'));

for( i = 0; i > numeriUtente.length; i ++){
  if (number === numeriUtente[i]){
    numeroInseritoDoppio = true;
  }
}
if (numeroInseritoDoppio === true) {
      alert('numero già inserito, inserire un altro numero')
  
    }else {
      numeriUtente.push(number);
      console.log(numeriUtente);
    }
}
