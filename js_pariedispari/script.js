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

//Creo una funzione per verificare che la somma sia pari o dispari

function isEven(number) {
  let result = false;
  if (!(number % 2)) result = true;
  return result;
}

//Creo una funzione per trovare il radio button selezionato

function radioCheckedValue(radioNodes) {
  let selectedRadio = "";
  for (let i = 0; i < radioNodes.length; i++) {
    const radioNode = radioNodes[i];
    if (radioNode.checked) selectedRadio = radioNode.value;
  }
  return selectedRadio;
}

//Targhettizzo gli elementi in pagina

const form = document.getElementById("form");
const userNumber = document.getElementById("user-number");
const aiNumber = document.getElementById("ai-number");
const result = document.getElementById("result");

//Aggiungo evento al click

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userChoice = document.querySelectorAll('input[name = "even-odd"]');

  const userNumberValue = parseInt(userNumber.value);

  if (!userNumberValue || userNumberValue < 0 || userNumberValue > 5) {
    alert("Devi inserire un numero valido!");
    return;
  } else {
    const radioValue = radioCheckedValue(userChoice);
    aiNumber.value = getRandomNumber();
  }
});
