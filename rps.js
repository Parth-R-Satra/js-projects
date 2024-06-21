
let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}


updateScoreElement();
let isautoPlaying = false;
let intervalId;
function autoPlay() {
    if (!isautoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)

        isautoPlaying = true;
    } else {
        clearInterval(intervalId);
        isautoPlaying = flase;
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');

})

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');

})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');

})


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
})


function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors') {

        if (computerMove === `Rock`) {
            result = `You Loose`;
        }
        else if (computerMove === `Paper`) {
            result = `You Win`;
        }
        else if (computerMove === `Scissors`) {
            result = `Tie`;
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === `Rock`) {
            result = `You Win`;
        }
        else if (computerMove === `Paper`) {
            result = `Tie`;
        }
        else if (computerMove === `Scissors`) {
            result = `You Loose`;
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === `Rock`) {
            result = `Tie`;
        }
        else if (computerMove === `Paper`) {
            result = `You Loose`;
        }
        else if (computerMove === `Scissors`) {
            result = `You Win`;
        }
    }

    if (result === 'You Win') {
        score.wins += 1;

    } else if (result === 'You Loose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector(`.js-result`).innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins},Looses:${score.losses},Ties:${score.ties}`;
}
let computerMove = ``;
function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = (`Rock`);
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = (`Paper`);
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = (`Scissors`);
    }
    return computerMove;

}