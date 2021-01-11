//FUNZIONI

function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  var result= Math.floor(Math.random() * (max + 1 - min)) + min; //Il max è incluso e il min è incluso

  return result;
}



function numeroInseritoValido(inputString){
    if (Number.isNaN(inputString)){
      return false;
    }
    if(inputString > 100 && inputString <= 0){
      return false;
    }
    return true;
  }

function winning (numeroInserito, bombs){
  if(bombs.includes(numeroInserito)){
    return false
  }
  return true;
}

function numeroCasualeMassimoPerDifficolta(livelloDifficolta) {
  var numeroMassimo= 100;
  switch (livelloDifficolta) {
    case 0 : numeroMassimo = 100;
    break;
    case 1 : numeroMassimo = 80;
    break;
    case 2 : numeroMassimo = 50;
    break;
  }
  return numeroMassimo;
}

function generaBombePerDifficolta(numeroMassimo){
  var bombs=[];

  while(bombs.length < 16) {

    var numeroCasuale = randomNumber(1, numeroMassimo);

    if(!bombs.includes(numeroCasuale)){

      bombs.push(numeroCasuale)
    }

  }
  console.log(bombs);

  return bombs;
}
// END FUNZIONI


// facciamo generare al computer 16  numeri a random tra 1 e 100
function startGame(){

  var sceltaLivello = prompt('BENVENUTO/A a "Campo Minato" per prima cosa scegli il livello del gioco: 0 , 1 o 2');

  var numeroCasualeMassimo = numeroCasualeMassimoPerDifficolta(sceltaLivello);

  var bombeGenerate=generaBombePerDifficolta(numeroCasualeMassimo)

  // l'utente può scegliere il livello di difficoltà


  // inizia il gioco
  var numeriUtente=[];
  var numeroInserito;
  var punteggio= 0;

  while(winning(numeroInserito, bombeGenerate) && numeriUtente.length < 84){

      numeroInserito = parseInt(prompt('INIZIAMO!!! inserisci un numero'));
      if(numeroInseritoValido(numeroInserito)){

        if (numeriUtente.includes(numeroInserito)=== true) {
          alert('numero già inserito, per favore inserisci un altro numero');

        } else {

          if(winning(numeroInserito,bombeGenerate)=== false){
            alert('Complimenti hai silurato una bomba!! hai perso!!');
          }

          numeriUtente.push(numeroInserito);
          punteggio++;

          if(numeriUtente.lengh === 84){
          alert('Grande!!! hai vinto la partita senza far esplodere nessuna bomba!!')
        }
      }
    } else {
        alert('inserisci un numero tra 1 e 100')
    }
  }

  alert('il tuo punteggio finale è:' +  punteggio)
}
