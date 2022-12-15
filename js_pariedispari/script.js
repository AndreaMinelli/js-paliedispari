/*
L’utente sceglie pari o dispari e inserisce un numero
da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
(usando una funzione)
Dichiariamo chi ha vinto.
*/

//Creo funzione numeri random

function getRandomNumber(min = 1, max = 5) {
  max++;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

getRandomNumber();
