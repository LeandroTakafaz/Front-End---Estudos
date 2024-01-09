let baralho = [];

function menu() {
    let listaCartas = `Quantidade de cartas no baralho: ${baralho.length}\n\n`;
    listaCartas += "Escolha uma opção:\n";
    listaCartas += "1. Adicionar uma carta\n";
    listaCartas += "2. Puxar uma carta\n";
    listaCartas += "3. Sair";

    alert(listaCartas);
}

function adicionarCarta() {
    let nomeCarta = prompt("Digite o nome da carta:");
    baralho.push(nomeCarta);
    alert(`Carta ${nomeCarta} adicionada ao baralho.`);
}

function puxarCarta() {
    if (baralho.length === 0) {
        alert("Não há cartas no baralho.");
    } else {
        let cartaPuxada = baralho.pop();
        alert(`Carta ${cartaPuxada} foi puxada do baralho.`);
    }
}

function iniciarPrograma() {
    let opcao = 0;
    while (opcao !== 3) {
        menu();
        opcao = Number(prompt("Digite o número da opção desejada:"));
        switch (opcao) {
            case 1:
                adicionarCarta();
                break;
            case 2:
                puxarCarta();
                break;
            case 3:
                alert("Encerrando o programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

iniciarPrograma();
