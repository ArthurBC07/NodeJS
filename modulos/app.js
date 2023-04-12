const readline = require("readline");
const calcular = require("./Calculadora");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntarOperacao() {
  rl.question("Digite a operação matemática (+, -, *, /): ", function (
    operacao
  ) {
    perguntarNumeros(operacao);
  });
}

function perguntarNumeros(operacao) {
  rl.question("Digite o primeiro número: ", function (num1) {
    rl.question("Digite o segundo número: ", function (num2) {
      const resultado = calcular(operacao, parseFloat(num1), parseFloat(num2));
      console.log("O resultado é: " + resultado);
      rl.close();
    });
  });
}

perguntarOperacao();
