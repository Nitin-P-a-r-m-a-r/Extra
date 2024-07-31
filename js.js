let randimNum = parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#submit")
const guessNumber = document.querySelector("#guessFild")
const guessslot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHii = document.querySelector("#lowOrhi")
const startOver = document.querySelector(".resultFiled")

let p = document.createElement('p')

let prevesGuss = []
let numGuss = 1 

let playGame = true

if(playGame){
    submit.addEventListener('click', (a)=> {
        a.preventDefault()
        const guess = parseInt(guessNumber.value)
        console.log(guess)
        validguess(guess)
    })
}

function validguess(guess){
    if(isNaN(guess)){
        alert('Enter valid Number')
    }
    else if(guess < 1){
        alert('Enter Number Grater than 1')
    }
    else if(guess > 100){
        alert('Enter Number less than 100')
    }
    else{
        prevesGuss.push(guess)
        if(numGuss === 11){
            displayguess(guess)
            displayMassage(`Game Over,Rangom nUmber was ${randimNum}`)
            endGame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess === randimNum){
        displayMassage(`You guessed it right`)
        endGame()
    }
    else if(guess > randimNum){
        displayMassage(`Number is TOOO low`)
    }else if(guess < randimNum){
        displayMassage(`Number is TOOO High`)
    }
}
function displayguess(guess){
    guessNumber.value = ""
    guessslot.innerHTML += `${guess}, `
    numGuss++
    remaining.innerHTML = `${11 - numGuss} `
}
function displayMassage(massgage){
    lowOrHii.innerHTML = `<h2>${massgage}</h2>`
}
function endGame() {
    guessNumber.value = "";
    guessNumber.setAttribute("disabled", "");

    p.classList.add('button');
    p.innerHTML = `<h1 class="button">Start New Game</h1>`;
    startOver.appendChild(p);

    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector(".button");
    newGameButton.addEventListener('click', (e) => {
      randimNum = parseInt(Math.random() * 100 + 1);
      prevesGuss = [];
      numGuss = 1;
      guessslot.innerHTML = "";
      remaining.innerHTML = `${11 - numGuss} `;
      startOver.removeChild(p);  
      guessNumber.removeAttribute("disabled");
      playGame = true;
    });
  }