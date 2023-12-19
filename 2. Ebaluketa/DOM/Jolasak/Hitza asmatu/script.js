// Zerrenda hitzak
var words = ["Tolosa", "informatika", "sagardoa", "bihotza", "ikasi", "teklatua", "ordenagailua"];

// Hitz bat aukeratu
var selectedWord = words[Math.floor(Math.random() * words.length)];

// Hitzaren gakoak
var wordArray = selectedWord.split('');
var guessedWord = new Array(wordArray.length).fill('_');

// HTML elementuak lortu
var wordElement = document.getElementById('word');
var guessInput = document.getElementById('guessInput');
var resultElement = document.getElementById('result');

// Hitzaren hasiera-pantaila
updateDisplay();

// Irudia eguneratu
function updateDisplay() {
    wordElement.textContent = guessedWord.join(' ');
}

// Iruzkina egiaztatu
function checkGuess() {
    var guess = guessInput.value.toLowerCase();
    if (guess.length === 1) {
        var correctGuess = false;
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === guess) {
                guessedWord[i] = guess;
                correctGuess = true;
            }
        }

        if (!guessedWord.includes('_')) {
            resultElement.textContent = 'Zorionak! Hitza asmatu duzu: ' + selectedWord;
        } else if (correctGuess) {
            resultElement.textContent = 'Zuzen!';
            updateDisplay();
        } else {
            resultElement.textContent = 'Okerra! Saiatu berriro...';
        }

        guessInput.value = '';
        guessInput.focus();
    } else {
        resultElement.textContent = 'Sartu bakarrik letra bat!';
    }
}
