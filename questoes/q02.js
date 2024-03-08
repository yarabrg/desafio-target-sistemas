// Função para calcular a sequência de Fibonacci até o termo escolhido
function fibonacci(termo) {
    let penultimo = 0;
    let ultimo = 1;
    let numero; // irá receber a soma do último e penúltimo valor da sequência
    let sequenciaFibonacci = [0, 1]; // Inicializa a sequência com os primeiros dois termos

    if (termo >= 0) {
        if (termo === 0) {
            numero = 0; // Se o termo for 0, a soma é 0
        } else if (termo === 1) {
            numero = 1; // Se o termo for 1, a soma é 1
            sequenciaFibonacci.push(numero); // Adiciona o primeiro termo à sequência
        } else {
            // Calcula os termos seguintes até o termo escolhido
            while (ultimo < termo) {
                numero = ultimo + penultimo; // Soma os dois últimos termos
                penultimo = ultimo; // Atualiza o penúltimo termo
                ultimo = numero; // Atualiza o último termo
                sequenciaFibonacci.push(numero); // Adiciona o termo à sequência
            }
        }

        console.log(`${sequenciaFibonacci}`);
        if (numero === termo) {
            console.log(`O número ${termo} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${termo} não pertence à sequência de Fibonacci.`);
        }
    } else {
        console.log('O termo deve ser um valor maior que 0!');
    }
}

fibonacci(34);
