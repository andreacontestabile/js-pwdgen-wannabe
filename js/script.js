// Chiediamo all'utente il nome
var nomeUtente = prompt("Qual è il tuo nome?");
// Chiediamo all'utente il cognome
var cognomeUtente = prompt("Qual è il tuo cognome?");
// Chiediamo all'utente il suo colore preferito
var coloreUtente = prompt("Qual è il tuo colore preferito?");
// Generiamo la password
var password = nomeUtente + cognomeUtente + coloreUtente + "19";
// Stampiamo il risultato 
document.getElementById('pwd').innerHTML = password;
