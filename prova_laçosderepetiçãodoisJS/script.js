function calcularFatorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 

    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularFibonacci(n) {
    const fibonacci = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            const novoFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(novoFibonacci);
        }
    }
    return fibonacci;
}

function executarCalculadoraMatematica() {
    const numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    const fatorial = calcularFatorial(numero);
    const fibonacci = calcularFibonacci(numero);

    alert(`Fatorial de ${numero}: ${fatorial}\nSequência de Fibonacci até ${numero}: ${fibonacci.join(', ')}`);
}

executarCalculadoraMatematica();