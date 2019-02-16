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
const playerCurrentScore = document.getElementsByClassName('playerCurrentScore');
let totalScore = 0;
let updatedScore = 0;
let gamePlaying = '';
let activeClass = document.getElementsByClassName('active')
let activePlayer = +(playerLeft == activeClass);



/* Reset Scores and Player Names*/

const resetGame = () => {

    gamePlaying = true;


// Setting Player Names

    playerOneName = prompt('Player One Name?');
    playerOne.textContent = playerOneName;
    playerTwoName = prompt('Player Two Name?');
    playerTwo.textContent = playerTwoName;

// Resetting Score Values 

    leftScoreDisplay.textContent = 0; 
    rightScoreDisplay.textContent = 0;
    leftCurrentScoreDisplay.textContent = 0;
    rightCurrentScoreDisplay.textContent = 0;

// Hidding Dice Image

    document.getElementById('diceimg').style.visibility = 'hidden';

// Setting player one to active

    document.getElementById('playerLeft').classList.remove('winner');
    document.getElementById('playerRight').classList.remove('winner');    
    document.getElementById('playerLeft').classList.remove('active');    
    document.getElementById('playerRight').classList.remove('active');    
    document.getElementById('playerLeft').classList.add('active');



}
// Reset Button 

newGameButton.addEventListener('click', resetGame);

// Roll Dice Button




const getDiceRoll = () => {

    


    if (gamePlaying) {

// Show Dice
        document.getElementById('diceimg').style.visibility = 'visible';

// random number generator 
    let randomNumber = (Math.floor(Math.random() * 6)+ 1);
    console.log(randomNumber);

// Takes Random Number and Applies it to dice image
    document.getElementById('diceimg').src=`img/dice${randomNumber}.png`;

        if (randomNumber !== 1) {
            updatedScore = randomNumber + updatedScore;
            document.getElementById('current-' + activePlayer).textContent = updatedScore;
            leftPlayerWin();
        } else {
            console.log('YOU LOST');
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
          playerLeft.classList.toggle('active')
          playerRight.classList.toggle('active')

          



          document.getElementById('diceimg').style.visibility = 'hidden';
       }

    
rollDiceButton.addEventListener('click', getDiceRoll);


const leftPlayerWin = () => {
    if (leftScoreDisplay.textContent >= 5) {
        console.log('Player One Wins.');
    }
}

// holdButton.addEventListener('click', holdButtonFunction);



// const holdButtonFunction = () => {
//     if (gamePlaying) {
//         scores[activePlayer] += updatedScore;
//         activeClass.textContent = scores[activePlayer]  
//     }

// }

        
        
    //    Check if the player has already won the game or not.


    // Event Listeners

 

