/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const helloTimeName = (names) => {
    const time = new Date();
    let hello;
    if(time.getHours() >= 6 && time.getHours() < 13 ){
        hello = `Buongiorno ${names}`;
        return hello
    } else if(time.getHours() < 17){
        hello = `Buon pomeriggio ${names}`;
        return hello
    } else {
        hello = `Buonasera ${names}`;
        return hello
    } 
    
}
// Invoca la funzione qui e stampa il risultato in console

const helloUser = helloTimeName(name)
console.log(helloUser)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.