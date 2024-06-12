function atv1() {

    let input_nome = document.getElementById('nome');
    let valor_nome = input_nome.value;
    let input_valor = document.getElementById('hora_aula');
    let valor_valor = input_valor.value;
    let semanal = document.getElementById('semanal');
    let semanal_valor = semanal.value;

    let totalzao = valor_valor * semanal_valor;

    document.writeln('<div class="card"><p> Seu Nome é: ' + valor_nome + '</p><p>Você ganha: R$' + totalzao + ',00 por semana</p></div>');
}