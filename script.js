// Chiediamo all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito

// Nome dell'utente
const userName = prompt('Ciao, inserisci il tuo nome');
console.log(userName);

// Cognome dell'utente
const userSurname = prompt('Adesso inserisci il tuo cognome');
console.log(userSurname);

// Colore preferito dell'utente
const userFavoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(userFavoriteColor);

// Fornire password = userName+userSurname+userFavoriteColor+23;
let userPassword = `${userName}${userSurname}${userFavoriteColor}23`;

// Mostrare password
document.getElementById('response').innerHTML = userPassword;