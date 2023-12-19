const palabras = ["bilbo", "gaztea", "eguna", "mendi"];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let palabraDescubierta = Array(palabraSecreta.length).fill('_');
let intentosRestantes = 6;

function mostrarPalabra() {
    document.getElementById('word-container').innerText = palabraDescubierta.join(' ');
}

function mostrarLetras() {
    const letrasContainer = document.getElementById('letters-container');
    letrasContainer.innerHTML = '';

    for (let letra of 'abcdefghijklmnñopqrstuvwxyz') {
        const letraButton = document.createElement('div');
        letraButton.innerText = letra;
        letraButton.classList.add('letter');
        letraButton.addEventListener('click', function() {
            comprobarLetra(letra);
            this.setAttribute('disabled', 'true');
        });
        letrasContainer.appendChild(letraButton);
    }
}

function comprobarLetra(letra) {
    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraDescubierta[i] = letra;
            }
        }
    } else {
        intentosRestantes--;
        mostrarFeedback(`La letra ${letra} no está en la palabra. Intentos restantes: ${intentosRestantes}`);
        document.getElementById('feedback').style.color = 'red';
    }

    mostrarPalabra();

    if (intentosRestantes === 0) {
        mostrarFeedback(`Has perdido. La palabra correcta era: ${palabraSecreta}`);
        reiniciarJuego();
    }

    if (!palabraDescubierta.includes('_')) {
        mostrarFeedback('¡Felicidades! Has adivinado la palabra.');
        document.getElementById('feedback').style.color = 'green';
        reiniciarJuego();
    }
}

function mostrarFeedback(mensaje) {
    document.getElementById('feedback').innerText = mensaje;
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraDescubierta = Array(palabraSecreta.length).fill('_');
    intentosRestantes = 6;
    mostrarPalabra();
    mostrarLetras();
    mostrarFeedback('');
    document.getElementById('feedback').style.color = 'red';
}

mostrarPalabra();
mostrarLetras();
