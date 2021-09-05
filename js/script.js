function playGame(playerInput){
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
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    let matchResult = displayResult(computerMove, playerMove)

    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Wynik: ' + matchResult);

    if(matchResult == 'Komputer wygrywa!'){
        computerWins ++;
    }
    if(matchResult == 'Ty wygrywasz!'){
        playerWins ++;
    }

    let finalResult = 'Komputer: ' + computerWins + ' / Player: ' + playerWins;
    printResult(finalResult);
}

let computerWins = 0;
let playerWins = 0;

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});




