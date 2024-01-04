const turista = prompt("Informe seu nome")
let visita = prompt("Você já visitou alguma cidade? (Sim/Não)")
let cidade = prompt("Qual o nome da cidade?")
let quantidade = 0


if (visita === "Não") {
    alert("Obrigado pela resposta!")
} else {
    quantidade = quantidade + 1
    visita = prompt("Você já visitou outra cidade?")
}

while(visita === "Sim") {
    novaCidade = prompt("Qual o nome da cidade?")
    cidade = cidade + " \n" + novaCidade
    quantidade = quantidade + 1
    visita = prompt("Você já visitou outra cidade?")
}

alert(turista + ", Essas são as cidades que você visitou " + cidade + ". Um total de " + quantidade + " Cidades")