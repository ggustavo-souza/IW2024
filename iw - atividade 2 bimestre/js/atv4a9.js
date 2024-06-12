window.onload = function() {

let lista = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
let i;

console.log(lista[1]);
setInterval("", 3000 );
console.log(lista.findLast((element) => element));
setInterval("", 3000 );

lista.push('abacaxi');
lista.push('morango');
console.log(lista);
setInterval("", 3000 );

lista.shift();
console.log(lista);
setInterval("", 3000 );

lista.pop();
console.log(lista);

let indexlaranja = (element) => element === 'laranja';
console.log('O índice da laranja no array é ' + lista.findIndex(indexlaranja));

let lista_m = lista.filter(fruta => fruta.startsWith('m'));

console.log(lista_m);

}