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
let activeClass = document.getElementsByClassName('active')
let activePlayer = +(playerLeft == activeClass);
let bankScore = document.getElementsByClassName('playerScore');


    
/* Reset Scores and Player Names*/

const resetGame = () => {

    gamePlaying = true;


// Setting Player Names

    // playerOneName = prompt('Player One Name?');
    // playerOne.textContent = playerOneName;
    // playerTwoName = prompt('Player Two Name?');
    // playerTwo.textContent = playerTwoName;

// Resetting Score Values 

    leftTotal.textContent = 0; 
    rightTotal.textContent = 0;
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

// Takes Random Number and Applies it to dice image
    document.getElementById('diceimg').src=`img/dice${randomNumber}.png`;

        if (randomNumber > 1) {
            updatedScore = randomNumber + updatedScore;
            document.getElementById('current-' + activePlayer).textContent = updatedScore;
            
        } else {
            document.getElementById('diceimg').style.visibility = 'visible';
            document.getElementById('diceimg').src=`img/dice1.png`;
            setTimeout(function () { alert('You Rolled A One! Score Reset - End of Turn!');}, 500);
            document.getElementById('current-' + activePlayer).textContent = 0;
            nextPlayer();


        }

  }
  console.log(updatedScore);
  
  
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

           setTimeout(function () {document.getElementById('diceimg').style.visibility = 'hidden';}, 500);
       }

    
rollDiceButton.addEventListener('click', getDiceRoll);

const holdButtonFunction = () => {
    if (gamePlaying) {
        totalScore = updatedScore + totalScore;
            document.getElementById('total-' + activePlayer).textContent = totalScore;
            document.getElementById('current-' + activePlayer).textContent = 0;

    nextPlayer();
    }
    }

holdButton.addEventListener('click', holdButtonFunction);



// }

        
        
    //    Check if the player has already won the game or not.


    // Event Listeners

 

