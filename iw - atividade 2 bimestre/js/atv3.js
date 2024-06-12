function atv3() {
    let num1 = document.getElementById('num1');
    let num1_valor = num1.value;
    let num2 = document.getElementById('num2');
    let num2_valor = num2.value;
    let num3 = document.getElementById('num3');
    let num3_valor = num3.value;

    let numeros = [num1_valor, num2_valor, num3_valor];

    numeros.sort((a, b ) => a - b);
    document.writeln('<p> Exibindo o array: ' + numeros + '</p>');
}