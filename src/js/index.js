/*
 OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo corresspondente 

 - passo 1 - dar um jeito de pegar o elemento HTML dos botões 

 - passo 2 - dar um jeito de indentificar o clique do usuário no botão

 - passo 3 - desmarcar o botão selecionado anterior 

 - passo 4 - marcar o botão clicado como se estivesse selecionado

 - passo 5 - esconder a imagem de fundo anterior

 - passo 6 - fazer aparecer a imagem de fundo  correspondente ao botão clicado
*/

//  passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
 const imagem = document.querySelectorAll('.imagem');

//  passo 2 - dar um jeito de indentificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

       //  passo 3 - desmarcar o botão selecionado anterior 
     desativarBotaoSelecionado();

       // passo 4 - marcar o botão clicado como se   estivesse selecionado
        selecionarBotaoCarrosel(botao);

       // passo 5 - esconder a imagem  ativa de fundo 
        esconderImagemAtiva(); 

       //  passo 6 - fazer aparecer a imagem de fundo  correspondente ao botão clicado
       mostrarImagemDefundo(indice);

 }) 
})

      
function mostrarImagemDefundo(indice) {
  imagem[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  newFunction();
}

function newFunction() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

