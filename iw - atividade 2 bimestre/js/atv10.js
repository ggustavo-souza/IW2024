
let contagem = 1;
let inter;
real = true;


let listaImagens = ['im1.png', 'im2.jpg', 'im3.jpg', 'im4.jpg', 'im5.jpeg', 'im06.jpg'];

window.onload = () => {
    let tagImg = document.getElementsByTagName("img");
    tagImg[0].src = "imagens/" + listaImagens[0];
    tagImg[1].src = "imagens/" + listaImagens[0];
    tagImg[2].src = "imagens/" + listaImagens[1];
    tagImg[3].src = "imagens/" + listaImagens[2];
    tagImg[4].src = "imagens/" + listaImagens[3];
    tagImg[5].src = "imagens/" + listaImagens[4];
    tagImg[6].src = "imagens/" + listaImagens[5];

    if (real) {
       let inter = setInterval(trocaImagem, 3000)
    }
}

function trocaImagem() {
    let imag = document.getElementsByTagName('img');
    imag[0].src = "imagens/" + listaImagens[contagem];
    contagem++;
    if (contagem == 6) {
        contagem = 0
    }
}

function im01() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[0];
}

function im02() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[1];
}

function im03() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[2];
}

function im04() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[3];
}

function im05() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[4];
}

function im06() {
    let img = document.getElementsByTagName('img');
    img[0].src = "imagens/" + listaImagens[5];
}

