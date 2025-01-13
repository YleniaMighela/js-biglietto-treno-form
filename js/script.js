// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// seleziono gli elementi della pagina di input
const kmField = document.getElementById('chilometri');
const etaField = document.getElementById ('età');
const bottone = document.querySelector ('button');

// seleziono gli elementi della pagina di output






bottone.addEventListener ('click', function () {

    const chilometri = kmField.value;

    const eta = etaField.value;
    
    
    // Prezzo del biglietto
    // const prezzochilometro = 0.21;
    
    // Calcoliamo il prezzo del biglietto in base ai km
    let prezzoTotale = (chilometri * 0.21);
    
    // console.log(prezzoTotale);
    
    
    // In base all'età del passeggero applichiamo gli sconti
    // SE è minore di 18 anni avrà lo sconto del 20%
    
    if(eta < 18) {
        let sconto = 20/100;
        prezzoTotale = (prezzoTotale - (prezzoTotale * sconto)).toFixed(2);
        console.log(prezzoTotale);
        
    }
    // SE è maggiore di 65 anni avrà lo sconto del 40%
    
    else if(eta > 65) {
        let sconto = 40/100;
        prezzoTotale = (prezzoTotale - (prezzoTotale * sconto)).toFixed(2);
        console.log(prezzoTotale);
    }
    
    
    // SE il passeggero ha un'età tra i 18 e i 64 anni pagherà prezzo pieno
    
    else{
        console.log(prezzoTotale);
    }
    
}
);










// // OUTPUT 
// // Prezzo totale

// console.log(`il prezzo totale del biglietto sarà di ${prezzoTotale} `);