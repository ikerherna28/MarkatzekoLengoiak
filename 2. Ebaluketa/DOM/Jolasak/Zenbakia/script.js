const numeroAdivinanza = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function comprobarAdivinanza() {
    const userGuess = document.getElementById('userGuess').value;
    intentos++;

    if (userGuess === '') {
        mostrarMensaje('Por favor, introduce un número.');
    } else {
        const guess = parseInt(userGuess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            mostrarMensaje('Por favor, introduce un número válido entre 1 y 100.');
        } else {
            if (guess === numeroAdivinanza) {
                mostrarMensaje(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
                deshabilitarInput();
            } else {
                mostrarMensaje(guess > numeroAdivinanza ? 'Demasiado alto. Intenta de nuevo.' : 'Demasiado bajo. Intenta de nuevo.');
            }
        }
    }
}

function mostrarMensaje(mensaje) {
    const mensajeResultado = document.getElementById('mensajeResultado');
    mensajeResultado.textContent = mensaje;
}

function deshabilitarInput() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}
