let num1 = parseFloat(window.prompt("Digite o primeiro número"))
let num2 = parseFloat(window.prompt("Digite o segundo número"))
let oper = window.prompt("Digite a operacao + - / *")


switch (oper) {
    case '+':
        document.write(num1 + num2)
        break;
    case '-':
        document.write(num1 - num2)
        break;
    case '/':
        document.write(num1 / num2)
        break;
    case '*':
        document.write(num1 * num2)
        break;
}