const idade = prompt("Informe a sua idade")

if (idade >= 18) {
    console.log(`Você é maior de idade`)
} else if (idade > 12) {
    console.log(`Você é um adolescente`)
} else if (idade > 4) {
    console.log("Você é uma criança")
} else {
    console.log("Você é um bebê")
}