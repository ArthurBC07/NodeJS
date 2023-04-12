function calcular(operacao, num1, num2) {
    switch (operacao) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Operação inválida";
    }
  }
  
  module.exports = calcular;
  