/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("Esecizio 1:");

function calculArea(l1, l2) {
  let area = l1 * l2;
  return area;
}

console.log(calculArea(5, 8));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 2:");

function crazySum(val1, val2) {
  let somma = val1 + val2;

  if (val1 === val2) {
    somma = somma * 3;
  }

  return somma;
}

console.log(crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 3:");

function crazyDiff(par1) {
  let diff = par1 / 19;

  if (par1 > 19) {
    diff = diff * 3;
  }

  return diff;
}

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 4:");

function boundary(n) {
  if ((n > 19 && n < 101) || n === 400) {
    console.log("true");
  } else {
    console.log("false");
  }
}
boundary(101);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 5:");

function epify(inputStr) {
  if (inputStr.startsWith("EPICODE ")) {
    return inputStr;
  } else {
    return "EPICODE " + inputStr;
  }
}

let result1 = epify("Non riesco ad andare in palestra");
let result2 = epify("EPICODE mi sta prosciugando");

console.log(result1);
console.log(result2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 6:");

function check3and7(num) {
  if (num > 0) {
    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let ris1 = check3and7(9);
let ris2 = check3and7(14);
let ris3 = check3and7(5);

console.log(ris1);
console.log(ris2);
console.log(ris3);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 7:");

function reverseString(string) {
  return string.split("").reverse().join("");
}

const res = reverseString("EPICODE");
console.log(res);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 8:");

function upperFirst(inputString) {
  let parole = inputString.split(" ");

  let paroleConMaiuscola = parole.map(function (parola) {
    return parola.charAt(0).toUpperCase() + parola.slice(1);
  });

  let risultat = paroleConMaiuscola.join(" ");

  return risultat;
}

let stringInput = "questa è una stringa di esempio";
let risultat = upperFirst(stringInput);

console.log("Stringa originale: " + stringInput);
console.log("Stringa con la prima lettera di ogni parola in maiuscolo: " + risultat);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 9:");

function cutString(inputString) {
  if (inputString.length >= 2) {
    return inputString.slice(1, -1);
  } else {
    return "";
  }
}

let stringaInput = "Hello";
let risul = cutString(stringaInput);

console.log("Stringa originale: " + stringaInput);
console.log("Stringa senza il primo e l'ultimo carattere: " + risul);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esecizio 10:");

function giveMeRandom(n) {
  let numeriCasuali = [];

  for (let i = 0; i < n; i++) {
    let numeroCasuale = Math.floor(Math.random() * 11);
    numeriCasuali.push(numeroCasuale);
  }

  return numeriCasuali;
}

let risultato10 = giveMeRandom(5);

console.log("Array di numeri casuali: " + risultato10);
