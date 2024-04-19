do {
    var menu = prompt("Qual cálculo você gostaria de fazer?\n1 - Calcular Área do Triângulo\n2 - Calcular Área do Retângulo\n3 - Calcular Área do Quadrado\n4 - Calcular Área do Trapézio\n5 - Calcular Área do Círculo");

    if(menu == 1){
        function calcTriangulo(base, altura) {
            const triangulo = (base * altura) / 2;
            return triangulo;
        }
        const result = calcTriangulo(base = prompt("Valor da Base: "), altura = prompt("Valor da Altura: "));
        console.warn("O valor da Área do Triângulo é: ", result);

    }else if(menu  == 2){
        function calcRetangulo(base, altura) {
            const retangulo = base * altura;
            return retangulo;
        }
        const result = calcRetangulo(base = prompt("Valor da Base: "), altura = prompt("Valor da Altura: "));
        console.warn("O valor da Área do Retângulo é: ", result);

    }else if(menu == 3) {
        function calcQuadrado(lado) {
            const quadrado = lado * lado;
            return quadrado;
        }
        const result = calcQuadrado(lado = prompt("Digite o tamanho do Lado do Quadrado: "));
        console.warn("O valor da área do Quadrado é: ", result);

    }else if(menu == 4) {
        function calcTrapezio(baseMaior, baseMenor, altura) {
            const trapezio = (baseMaior + baseMenor) * altura / 2;
            return trapezio;
        }
        const result = calcTrapezio(baseMaior = prompt("Valor da Base Maior: "), prompt("Valor da Base Menor: "), prompt("Valor da Altura: "))
        console.warn("O valor da área do Trapézio é: ", result);

    }else if(menu == 5) {
        function calcCirculo(raio) {
            const pi = Math.PI;
            const circulo = (raio * raio) * pi;
            return circulo;
        }
        const result = calcCirculo(raio = prompt("Valor do Raio: "));
        console.warn("O Valor da área do Círculo é: ", result);

    }else if(menu == 0){
        alert("Até logo!")
    } 
} while (menu != 0);
