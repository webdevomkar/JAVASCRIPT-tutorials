let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    guessInput.value = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    previousGuesses.push(guess);
    attempts--;

    if (guess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the number!';
        endGame();
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    document.getElementById('previousGuesses').textContent = previousGuesses.join(', ');
    document.getElementById('attemptsRemaining').textContent = attempts;

    if (attempts === 0) {
        document.getElementById('message').textContent = `Game over! The number was ${randomNumber}.`;
        endGame();
    }
});

document.getElementById('restartGame').addEventListener('click', function() {
    attempts = 10;
    previousGuesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('message').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('attemptsRemaining').textContent = attempts;
    document.getElementById('restartGame').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').disabled = false;
});

function endGame() {
    document.getElementById('submitGuess').disabled = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('restartGame').style.display = 'inline-block';
}
