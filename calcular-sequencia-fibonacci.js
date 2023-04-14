
//Essa função irá calcular e retornar a sequência de Fibonacci
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
//Essa função verifica se num  está sequência de Fibonacci
function isNumberInFibonacci(num) {
  let n = 0;
  let fibNumber = 0;
  while (fibNumber < num) {
    fibNumber = fibonacci(n)[n];
    n++;
  }
  return fibNumber === num;
}

// Exemplo teste
const number = 53;

if (isNumberInFibonacci(number)) {
  console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}