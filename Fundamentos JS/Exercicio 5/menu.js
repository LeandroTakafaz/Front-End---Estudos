let opcao =  prompt("Informe a opção de sua escolha ('1/2/3/4/5)")

if(opcao < 5) {
    
do {
    alert("A opção escolhida foi " + opcao)
    opcao = prompt("Informe a opção de sua escolha ('1/2/3/4/5)")
} while(opcao != 5)
}
alert("Opção " + opcao + " escolhida. Encerrando o programa...")
