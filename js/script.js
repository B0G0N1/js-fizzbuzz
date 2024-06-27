// Seleziona il primo elemento del DOM con la classe 'chessboard' e lo assegna alla costante 'chessboard'
const chessboard = document.querySelector('.chessboard');

// Avvia un ciclo for che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Crea un nuovo elemento 'div' e lo assegna alla costante 'square'
    const square = document.createElement('div');
    // Inizializza le variabili 'text' con il valore di 'i' e 'className' con 'number'
    let text = i, className = 'number';

    // Se il numero è multiplo di 15, assegna 'FizzBuzz' a 'text' e 'fizzBuzz' a 'className'
    if (i % 15 === 0) {
        text = 'FizzBuzz';
        className = 'fizzBuzz';
    }
    // Se il numero è multiplo di 3, assegna 'Fizz' a 'text' e 'fizz' a 'className'
    else if (i % 3 === 0) {
        text = 'Fizz';
        className = 'fizz';
    }
    // Se il numero è multiplo di 5, assegna 'Buzz' a 'text' e 'buzz' a 'className'
    else if (i % 5 === 0) {
        text = 'Buzz';
        className = 'buzz';
    }

    // Aggiunge le classi 'square' e la classe corrispondente a 'className' all'elemento 'square'
    square.classList.add('square', className);
    // Imposta il testo dell'elemento 'square' a 'text'
    square.innerText = text;
    // Aggiunge l'elemento 'square' come ultimo figlio dell'elemento 'chessboard'
    chessboard.append(square);
}