/* Variables */
const playerOne = document.getElementById('nameLeft')
const playerTwo = document.getElementById('nameRight')
let playerOneName, playerTwoName;
const playerLeft = document.getElementById('playerLeft')
const playerRight = document.getElementById('playerRight')
const newGameButton = document.getElementById('newgamebutton');
const rollDiceButton = document.getElementById('rolldicebutton');
const holdButton = document.getElementById('holdbutton');
const leftScoreDisplay = document.getElementById('leftScore');
const rightScoreDisplay = document.getElementById('rightScore');
let leftCurrentScoreDisplay = document.getElementById('current-0');
let rightCurrentScoreDisplay = document.getElementById('current-1');
let leftTotal = document.getElementById('total-0');
let rightTotal = document.getElementById('total-1');
const playerCurrentScore = document.getElementsByClassName('playerCurrentScore');
let totalScore = 0;
let updatedScore = 0;
let gamePlaying = '';
let randomNumber = 0;
let activeClass = document.getElementsByClassName('active')
let activePlayer = +(playerLeft == activeClass);
let bankScore = [0, 0];
let currentScoreVal = document.getElementById('current-' + activePlayer).textContent
let players = [playerOne, playerTwo];

const endOfGame = () => {

    if (gamePlaying == false) {
        document.getElementById('playerLeft').classList.remove('active');
        document.getElementById('playerRight').classList.remove('active');
    }
}
/* Reset Scores and Player Names*/

const resetGame = () => {
    document.getElementById('playerLeft').classList.add('active');
    gamePlaying = true;
    currentScoreVal = 0;
    bankScore = [0, 0];
    activePlayer = 0;

    // Setting Player Names

    playerOneName = prompt('Player One Name?', 'Player One');
    playerOne.textContent = playerOneName;
    playerTwoName = prompt('Player Two Name?', 'Player Two');
    playerTwo.textContent = playerTwoName;

    // Resetting Score Values 

    leftTotal.textContent = 0;
    rightTotal.textContent = 0;
    leftCurrentScoreDisplay.textContent = 0;
    rightCurrentScoreDisplay.textContent = 0;

    // Hidding Dice Image

    document.getElementById('diceimg').style.visibility = 'hidden';

    // Setting player one to active

    document.getElementById('playerLeft').classList.remove('active');
    document.getElementById('playerRight').classList.remove('active');
    document.getElementById('playerLeft').classList.add('active');

}

const getDiceRoll = () => {
    if (gamePlaying) {

        // Show Dice
        document.getElementById('diceimg').style.visibility = 'visible';

        // random number generator 
        let randomNumber = (Math.floor(Math.random() * 6) + 1);

        // Takes Random Number and Applies it to dice image
        document.getElementById('diceimg').src = `img/dice${randomNumber}.png`;

        if (randomNumber !== 1) {
            updatedScore = randomNumber + updatedScore;
            document.getElementById('current-' + activePlayer).textContent = updatedScore;

        } else {
            document.getElementById('diceimg').src = `img/dice${randomNumber}.png`;
            document.getElementById('current-' + activePlayer).textContent = 0;
            nextPlayer();
        }
    }
}

const nextPlayer = () => {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }

    updatedScore = 0;

    playerLeft.classList.toggle('active');
    playerRight.classList.toggle('active');

    setTimeout(function () {
        document.getElementById('diceimg').style.visibility = 'hidden';
    }, 500);
}

const holdButtonFunction = () => {
    if (gamePlaying) {

        bankScore[activePlayer] = updatedScore + bankScore[activePlayer];
        document.getElementById('total-' + activePlayer).textContent = bankScore[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = 0;
    }

    if (bankScore[0] >= 20) {
        alert(playerOne.textContent + ' WINS, ' + playerTwo.textContent + ' Loses');
        document.getElementById('playerRight').classList.remove('active');
        document.getElementById('playerLeft').classList.remove('active');
        document.getElementById('diceimg').style.visibility = 'hidden';
        
        gamePlaying = false;

    }
    if (bankScore[1] >= 20) {
        alert(playerTwo.textContent + ' WINS, ' + playerOne.textContent + ' Loses');
        document.getElementById('playerRight').classList.remove('active');
        document.getElementById('playerLeft').classList.remove('active');
        document.getElementById('diceimg').style.visibility = 'hidden';
        gameplaying = false;

    } else {
        nextPlayer();
    }
}

holdButton.addEventListener('click', holdButtonFunction);
rollDiceButton.addEventListener('click', getDiceRoll);
newGameButton.addEventListener('click', resetGame);