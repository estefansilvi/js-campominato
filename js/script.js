// FUNZIONI
function startGame(){
  document.getElementById('start');
}
function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  var result= Math.floor(Math.random() * (max + 1 - min)) + min; //Il max è incluso e il min è incluso

  return result;
}



function isUserInputValid(inputString){
    if (Number.isNaN(inputString)){
      return false;
    }
    if(inputString > 100 && inputString <= 0){
      return false;
    }
    return true;
  }

function winning (numeroInserito, numberBomb){
  if(numberBomb.includes(numeroInserito)){
    return false
  }
  return true;
}
// END FUNZIONI


// facciamo generare al computer 16  numeri a random tra 1 e 100

var numberBomb=[];

while(numberBomb.length < 16) {

  var numeroCasuale = randomNumber(1,100);

    if(!numberBomb.includes(numeroCasuale)){

      numberBomb.push(numeroCasuale)
    }

  }
console.log(numberBomb);



// inizia il gioco
var numeriUtente=[];
var numeroInserito;
var punteggio= 0;

while(winning(numeroInserito, numberBomb) && numeriUtente.length < 84){

    numeroInserito = parseInt(prompt('inserisci un numero'));
    if(isUserInputValid(numeroInserito)){

      if (numeriUtente.includes(numeroInserito)=== true) {
        alert('numero già inserito');

      } else {

        if(winning(numeroInserito,numberBomb)=== false){
          alert('hai perso!!');
        }

        numeriUtente.push(numeroInserito);
        punteggio++;

        if(numeriUtente.lengh === 84){
        alert('hai vinto!!')
      }
    }
  } else {
      alert('inserisci un numero tra 1 e 100')
  }
}

alert('il tuo punteggio finale è:' +  punteggio)
