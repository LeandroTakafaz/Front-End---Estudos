const nome1 = prompt("Insira o nome do primeiro corredor")
const velocidade1 = prompt("Insira a velocidade final")
const nome2 = prompt("Insira o nome do segundo corredor")
const velocidade2 = prompt("Insira a velocidade final")

if (velocidade1 > velocidade2) {
    alert("O corredor: " + nome1 + " foi o vencedor")
} else if (velocidade2 > velocidade1) {
    alert("O corredor: " + nome2 + " foi o vencedor.")
} else {
    alert("Empate! Nenhum dos dois corredores ganhou.")
}