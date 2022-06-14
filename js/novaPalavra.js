const btnFechar = document.querySelector("#close");
const botaoAdicionarMais = document.getElementById("adicionarMais");
const botaoAdicionar = document.querySelector("#adicionar-palavra");
let modalRecado = document.querySelector("#preenchaFormulario");
let novoArrayDePalavras = [];


botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    // Dados do meu formulário
    let formulario = document.querySelector("#formulario-novaPalavra");
    let palavraAdd = formulario.palavraAdd.value;
    let categoriaAdd = formulario.categoriaAdd.value;


    //Verfica se existe conteúdo no meu input e exibe ou não o modal 
    if (!checaInput(palavraAdd)) {
        modalRecado.style.display = "flex";
        return;
    } else {
        modalRecado.style.display = "none";
    }
    //botão para fechar o modal
    btnFechar.addEventListener('click', function () {
        modalRecado.style.display = "none";
    })

    let novoObjetoAdd = {};
    // garantir que as letras estejam em maiúsculo
    novoObjetoAdd.palavraAdd = document.getElementById("palavraAdd").value.toUpperCase();
    novoObjetoAdd.categoriaAdd = document.getElementById("categoriaAdd").value.toUpperCase();
    novoArrayDePalavras.push(novoObjetoAdd);

    if (!localStorage.getItem(novoObjetoAdd)) {
        localStorage.setItem(novoArrayDePalavras, JSON.stringify(novoArrayDePalavras));
    }

    function adicionarObjeto(novoObjetoAdd) {

        let objeto;
        if (localStorage.getItem(novoObjetoAdd)) {
            objeto = JSON.parse(localStorage.getItem(novoArrayDePalavras));
        }
        objeto.push(novoArrayDePalavras);
        localStorage.setItem(novoArrayDePalavras, JSON.stringify(objeto));
    }

    function checaInput(palavraAdd) {

        if (palavraAdd.length == 0 || categoriaAdd.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    console.log(novoArrayDePalavras);

    let modalPalavraAdicionada = document.getElementById("modalPalavraAdicionada");
    modalPalavraAdicionada.style.display = "flex";
    formulario.reset();

});