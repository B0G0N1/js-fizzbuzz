// Crea e assegna all costante chessboard il primo elemento del DOM che ha la classe chessboard
const chessboard = document.querySelector('.chessboard')

// Entro in un ciclo for che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creare elemento div classe "square"
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Se il numero è multiplo di 15 allora stampo "FizzBuzz"
    if (i % 15 === 0) {
        // Aggiunge all'interno di "square" il testo "FizzBuzz"
        square.innerText = 'FizzBuzz';
    }
    // Se il numero è multiplo di 3 allora stampo "Fizz"
    else if (i % 3 === 0) {
        // Aggiunge all'interno di "square" il testo "Fizz"
        square.innerText = 'Fizz';
    }
    // Se il numero è multiplo di 5 allora stampo "Buzz"
    else if (i % 5 === 0) {
        // Aggiunge all'interno di "square" il testo "Buzz"
        square.innerText = 'Buzz';
    }
    // Altrimenti stampo il numero
    else {
        // Aggiunge all'interno di "square" il numero del ciclo
        square.innerText = `${i}`;
    }

    // Aggiunge l'elemento "square" alla fine dell'elemento "chessboard"
    chessboard.append(square);
}