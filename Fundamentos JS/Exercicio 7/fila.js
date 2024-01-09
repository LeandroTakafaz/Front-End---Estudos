let filaPacientes = [];

function menu() {
    let listaPacientes = "Pacientes na fila:\n";
    filaPacientes.forEach((paciente, index) => {
        listaPacientes += `${index + 1}º ${paciente}\n`;
    });

    listaPacientes += "\nEscolha uma opção:\n";
    listaPacientes += "1. Novo paciente\n";
    listaPacientes += "2. Consultar paciente\n";
    listaPacientes += "3. Sair";

    alert(listaPacientes);
}

function novoPaciente() {
    let nomePaciente = prompt("Digite o nome do novo paciente:");
    filaPacientes.push(nomePaciente);
    alert(`Paciente ${nomePaciente} adicionado à fila.`);
}

function consultarPaciente() {
    if (filaPacientes.length === 0) {
        alert("Não há pacientes na fila.");
    } else {
        let pacienteConsultado = filaPacientes.shift();
        alert(`Paciente ${pacienteConsultado} foi consultado e retirado da fila.`);
    }
}

function iniciarPrograma() {
    let opcao = 0;
    while (opcao !== 3) {
        menu();
        opcao = Number(prompt("Digite o número da opção desejada:"));
        switch (opcao) {
            case 1:
                novoPaciente();
                break;
            case 2:
                consultarPaciente();
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
