alert("con questo programma genereremo la tua password")

document.getElementById("titolo").innerHTML = "GENERATORE PASSWORD";

var nome = prompt("scrivi il tuo nome")
document.getElementById("nome").innerHTML = "bene, il tuo nome è " + nome;

var cognome = prompt("ora scrivi il tuo cognome");
document.getElementById("cognome").innerHTML = " il tuo cognome è " + cognome;

var colore = prompt("come ultima cosa scrivi il tuo colore preferito");
document.getElementById("colore").innerHTML = " e il tuo colore preferito è il " + colore;

document.getElementById("pw").innerHTML = "la tua password sarà " + nome + cognome + colore + "21";
