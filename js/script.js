// Entro in un ciclo for che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Se il numero è multiplo di 15 allora stampo "FizzBuzz"
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }
    // Se il numero è multiplo di 15 allora stampo "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Se il numero è multiplo di 15 allora stampo "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Altrimenti stampo il numero
    else {
        console.log(i);
    }
}