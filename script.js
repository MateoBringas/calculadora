function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value)
    let operador = document.getElementById("operador").value;
    let resultado = 0;

    switch (operador) {
        case "suma":
            resultado = num1 + num2
            break;
        case "resta":
            resultado = num1 - num2
            break;
        case "div":
            if (num2 !== 0){
                resultado = num1 / num2;
            } else{
                resultado = "No se puede dividir por 0";
            }
            break
        case "multi":
            resultado = num1 * num2
            break
        default:
            resultado = "Operador no valido"
    }
    document.getElementById("resultado").textContent = resultado;
}