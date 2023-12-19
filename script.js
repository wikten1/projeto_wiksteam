//Menus secundarios main
var botaoAside1 = document.getElementById('btnAside1')
var itensLista1 = document.getElementById('itensLista1')

function exibirMaisbtn1() {
    var opcoes = itensLista1.querySelectorAll('.escondido')
    var imagem = document.getElementById('iconeSeta1')
    
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].style.display === 'none' || opcoes[i].style.display === '') {
            opcoes[i].style.display = 'list-item';
        } else {
            opcoes[i].style.display = 'none';
        }
    } 

    if(imagem.src.includes('imagens/SetaParaBaixo.png')){
        imagem.src = 'imagens/SetaParaCima.png'
        imagem.alt = 'Seta para cima'
    } else {
        imagem.src = 'imagens/SetaParaBaixo.png'
        imagem.alt = 'Seta para baixo'
    }

}

botaoAside1.addEventListener('click', exibirMaisbtn1)

var botaoAside2 = document.getElementById('btnAside2')
var itensLista2 = document.getElementById('itensLista2')

function exibirMaisbtn2() {
    var opcoes = itensLista2.querySelectorAll('.escondido')
    var imagem = document.getElementById('iconeSeta2')
    
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].style.display === 'none' || opcoes[i].style.display === '') {
            opcoes[i].style.display = 'list-item';
        } else {
            opcoes[i].style.display = 'none';
        }
    } 

    if(imagem.src.includes('imagens/SetaParaBaixo.png')){
        imagem.src = 'imagens/SetaParaCima.png'
        imagem.alt = 'Seta para cima'
    } else {
        imagem.src = 'imagens/SetaParaBaixo.png'
        imagem.alt = 'Seta para baixo'
    }

}

botaoAside2.addEventListener('click', exibirMaisbtn2)

//carrosel

let girarCarrosel = 1;
  
    function mostrarSlide(n) {
      document.getElementById(`s${girarCarrosel}`).checked = false;
      girarCarrosel = (n + 5) % 5 + 1;
      document.getElementById(`s${girarCarrosel}`).checked = true;
    }
  
    function proximoSlide() {
      mostrarSlide(girarCarrosel);
    }
  
    setInterval(proximoSlide, 5000);


//slide 2

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})