const prota = prompt("Informe o Nome do Protagonista")
const atk = parseFloat(prompt("Informe o Poder de Ataque causado pelo Protagonista"))
const vilao = prompt("Informe o Nome do Vilão")
let vida = parseFloat(prompt("Informe a quantidade de Vida do Vilão"))
const def = parseFloat(prompt("Informe a quantidade de Pontos de Defesa"))
const escudo = prompt("O Vilão possui escudo?")
let dano = atk - def;

if (atk > def && escudo == "Não") {
    vida = vida - dano
    alert("O Vilão ficou com " + vida + " de HP")
}else if(atk > def && escudo == "Sim"){
    dano = dano / 2
    vida = vida - dano
    alert("O Escudo protegeu o Vilão e ele ficou com " + vida)
} else if(atk <= def) {
    alert("O dano causado foi 0")
}