const primeiroNumero = prompt("Digite o primeiro número: ")
const segundoNumero = prompt("Digite o segundo número: ")

const x = parseFloat(primeiroNumero)
const y = parseFloat(segundoNumero)

const soma = x + y
const sub = x - y
const multi = x * y
const divi = x / y
alert(
    "Resultados:\n" + 
    `Soma: ${soma}\n` +
    `Subtração: ${sub}\n`+
    `Multiplicação: ${multi}\n`+
    `Divisão: ${divi}`
)