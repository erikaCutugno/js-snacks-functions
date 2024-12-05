/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
const countVocal= (wordStr) => {
    let num = 0;
    for (let i=0; i < wordStr.length; i++){
        if(wordStr[i]=== "a" || wordStr[i]=== "e" || wordStr[i]=== "i" || wordStr[i]=== "o" || wordStr[i]=== "u"){
           num+=1
        } 
    }
    return num
}


// Invoca la funzione qui e stampa il risultato in console

const numberVocal = countVocal(word)
console.log(numberVocal);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)