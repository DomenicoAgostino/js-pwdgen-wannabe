
/*
Chiedere all’utente il suo nome,
Chiedere il suo cognome,
Chiedere il suo colore preferito
*/


const firstName = prompt("Inserisci il tuo Nome");

const lastName= prompt("Inserisci il tuo Cognome");

const loveColor = prompt("Il tuo colore preferito?");

console.log(firstName);
console.log(lastName);
console.log(loveColor);

const outputList = 
`
<ul>
    <li>Nome:<strong>${firstName}</strong></li>
    <li>Cogonome:<strong>${lastName}</strong></li>
    <li>Colore preferito:<strong>${loveColor}</strong></li>
  </ul>




`;

console.log(outputList);

document.getElementById("dati-utente").innerHTML=outputList

document.getElementById("dati-completi").innerHTML=firstName+""+lastName +""+loveColor +""+22










