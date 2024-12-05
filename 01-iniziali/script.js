/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
const firstLetterWord = (arrayName) => {
    let firstLetterName = [];
    for (let i = 0; i < arrayName.length; i++){
        let firstName = arrayName[i];
        firstLetterName.push(firstName[0]);
    }
    return firstLetterName;
}

// Invoca la funzione qui e stampa il risultato in console
const firstLetterNewArray = firstLetterWord(names)
console.log(firstLetterNewArray)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]