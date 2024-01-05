let palavra = prompt("Por favor, informe uma palavra:");
let ehPalindromo = true;

for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        ehPalindromo = false;
        break;
    }
}

if (ehPalindromo) {
    alert(palavra + " é um palíndromo.");
} else {
    let palavraInvertida = palavra.split('').reverse().join('');
    alert(palavra + " não é um palíndromo. A palavra da esquerda para a direita é " + palavra + " e da direita para a esquerda é " + palavraInvertida + ".");
}
