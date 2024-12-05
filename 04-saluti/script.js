/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const helloName = (name) => {
    let hello = `Ciao ${name}`;
    return hello
}

// Invoca la funzione qui e stampa il risultato in console
const helloUser = helloName(userName)
console.log(helloUser)

//Risultato atteso se si passa 'Mario': // ciao Mario
