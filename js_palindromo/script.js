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
