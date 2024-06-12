function atv2(){

    let numero1 = document.getElementById('pr_numero');
    let numero1_valor = numero1.value;
    let numero2 = document.getElementById('seg_numero');
    let numero2_valor = numero2.value;

    let numeros = [parseInt.numero1_valor, parseInt.numero2_valor];

    numeros.sort((a, b) => a - b);

    if (numero1_valor == numero2_valor) {
        document.writeln('Os números inseridos são iguais');
    } else {
    document.writeln('<p>Aqui estão os números em ordem crescente: ' + numeros + '</p>');
    }
}