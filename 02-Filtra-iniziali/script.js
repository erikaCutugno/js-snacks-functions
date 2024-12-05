/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const sameLetter = (arrayName, letter) => {
    let newArray = [];
    for (let i = 0; i < arrayName.length; i++){
        let firstName = arrayName[i];
        if(firstName[0] === letter)
            newArray.push(firstName);
    }
    return newArray;
}
// Invoca la funzione qui e stampa il risultato in console
const sameLetterArray = sameLetter (names, "L")

console.log(sameLetterArray)
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]