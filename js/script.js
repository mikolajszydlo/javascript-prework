function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
    }
    if(argMoveId == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
    if(computerMove == 'kamień' && playerMove == 'nożyce'){
        return 'Komputer wygrywa!';
    }
    if(computerMove == 'papier' && playerMove == 'kamień'){
        return 'Komputer wygrywa!';
    }
    if(computerMove == 'nożyce' && playerMove == 'papier'){
        return 'Komputer wygrywa!';
    }
    if(computerMove == 'papier' && playerMove == 'nożyce') {
        return 'Ty wygrywasz!';
    }
    if(computerMove == 'kamień' && playerMove == 'papier') {
        return 'Ty wygrywasz!';
    }
    if(computerMove == 'nożyce' && playerMove == 'kamień') {
        return 'Ty wygrywasz!';
    } 
    if(computerMove == playerMove){
        return 'Remis!';
    }
    if(computerMove == 'nieznany ruch' && playerMove == 'nieznany ruch'){
            return 'Wpisałeś złą wartość';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
let result = displayResult(computerMove, playerMove)

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wpisał: ' + playerInput);

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);
printMessage('Wynik: ' + result);


