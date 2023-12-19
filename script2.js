var botaoLogin = document.querySelector('#botaoLogin');

function logarConta(){
    var senha = document.getElementById('senha').value
    var nome = document.getElementById('nome').value

    if (nome === senha){
        alert("Erro: Nome ou senha invalido!")
    } else{
        window.location.href = 'index.html'
    }
}

botaoLogin.addEventListener('click', logarConta);