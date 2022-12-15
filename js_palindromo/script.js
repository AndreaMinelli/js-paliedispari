/*
Chiedere all’utente di inserire una parola tramiite
un form
Creare una funzione per capire se la parola inserita
è palindroma
*/

//Creo funzione verifica parola palindroma

function isPalindrome(word) {
  let result = false;
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (word === reverseWord) result = true;
  return result;
}

//Targhettizzo gli elementi nella pagina

const mainForm = document.getElementById("main-form");
const wordField = document.getElementById("word");
const resultField = document.getElementById("result");

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userWord = wordField.value.trim();

  if (!isNaN(userWord)) {
    alert("Devi inserire una parola da controllare!");
    wordField.value = "";
    return;
  } else {
    const control = isPalindrome(userWord);
    let message = `La parola <strong>${userWord}</strong> non è palindroma, provane un'altra.`;
    if (control)
      message = `La parola <strong>${userWord}</strong> è palindroma.`;
    wordField.value = "";
    resultField.innerHTML = message;
  }
});
