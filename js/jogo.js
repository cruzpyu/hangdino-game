//*o mostrador vai exibir as letras da palavraEscolhida sublinhadas. também é um array que recebe as letras corretas inseridas pelo jogador. posteriormente vai ser o meu critério de validação de vitória, pois compararei a palavra escolhida com o mostrador e se os dois forem iguais, o jogador venceu o jogo*//
let mostrador = [];
let categoriaPalavra;
let palavraEscolhida;
let totalChances = 6;

let teclado = document.querySelector("#teclado");
let teclas = teclado.querySelectorAll(".letter");

let gameOver = document.getElementById("gameOver");
let youWin = document.getElementById("youWin");
let btnPlayAgain = document.querySelectorAll(".jogar-novamente");
let btnReiniciar = document.querySelector("#btn-reiniciar");
const bancoPalavras = [
    palavra01 = {
        nome: "GARGANTA",
        categoria: "PARTES DO CORPO"
    },

    palavra02 = {
        nome: "OMBROS",
        categoria: "PARTES DO CORPO"
    },

    palavra03 = {
        nome: "OLHOS",
        categoria: "PARTES DO CORPO"
    },
    palavra04 = {
        nome: "QUEIXO",
        categoria: "PARTES DO CORPO"
    },
    palavra05 = {
        nome: "JOELHO",
        categoria: "PARTES DO CORPO"
    },
    palavra06 = {
        nome: "BARRIGA",
        categoria: "PARTES DO CORPO"
    },
    palavra07 = {
        nome: "BOCA",
        categoria: "PARTES DO CORPO"
    },
    palavra08 = {
        nome: "NARIZ",
        categoria: "PARTES DO CORPO"
    },
    palavra09 = {

        nome: "UNHA",
        categoria: "PARTES DO CORPO"
    },
    palavra10 = {
        nome: "RIM",
        categoria: "PARTES DO CORPO"
    },

    palavra11 = {
        nome: "AZUL",
        categoria: "CORES"
    },
    palavra12 = {
        nome: "LARANJA",
        categoria: "CORES"
    },
    palavra13 = {
        nome: "VERMELHO",
        categoria: "CORES"
    },
    palavra14 = {
        nome: "VERDE",
        categoria: "CORES"
    },
    palavra15 = {

        nome: "PRATA",
        categoria: "CORES"
    },
    palavra16 = {
        nome: "TURQUESA",
        categoria: "CORES"
    },
    palavra17 = {
        nome: "MARROM",
        categoria: "CORES"
    },
    palavra18 = {

        nome: "PRETO",
        categoria: "CORES"
    },
    palavra19 = {

        nome: "CINZA",
        categoria: "CORES"
    },
    palavra20 = {

        nome: "BEGE",
        categoria: "CORES"
    },

    palavra21 = {
        nome: "ANGOLA",
        categoria: "PAÍSES"
    },
    palavra22 = {
        nome: "URUGUAI",
        categoria: "PAÍSES"
    },
    palavra23 = {
        nome: "SIRIA",
        categoria: "PAÍSES"
    },
    palavra24 = {
        nome: "EGITO",
        categoria: "PAÍSES"
    },
    palavra25 = {
        nome: "JAPAO",
        categoria: "PAÍSES"
    },
    palavra26 = {
        nome: "TAILANDIA",
        categoria: "PAÍSES"
    },
    palavra27 = {
        nome: "VENEZUELA",
        categoria: "PAÍSES"
    },
    palavra28 = {
        nome: "BOLIVIA",
        categoria: "PAÍSES"
    },
    palavra29 = {
        nome: "CHILE",
        categoria: "PAÍSES"
    },
    palavra30 = {
        nome: "SURINAME",
        categoria: "PAÍSES"
    },

    palavra31 = {
        nome: "GOLFINHO",
        categoria: "ANIMAIS"
    },
    palavra32 = {
        nome: "RATO",
        categoria: "ANIMAIS"
    },

    palavra33 = {
        nome: "ARANHA",
        categoria: "ANIMAIS"
    },

    palavra34 = {
        nome: "SIRI",
        categoria: "ANIMAIS"
    },

    palavra35 = {
        nome: "BARATA",
        categoria: "ANIMAIS"
    },

    palavra36 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },

    palavra37 = {
        nome: "JUMENTO",
        categoria: "ANIMAIS"
    },

    palavra38 = {
        nome: "CORUJA",
        categoria: "ANIMAIS"
    },

    palavra39 = {
        nome: "MORCEGO",
        categoria: "ANIMAIS"
    },

    palavra40 = {
        nome: "CANGURU",
        categoria: "ANIMAIS"
    },

    palavra41 = {
        nome: "TANGERINA",
        categoria: "FRUTAS"
    },
    palavra42 = {
        nome: "AMEIXA",
        categoria: "FRUTAS"
    },
    palavra43 = {
        nome: "CEREJA",
        categoria: "FRUTAS"
    },
    palavra44 = {
        nome: "CAJU",
        categoria: "FRUTAS"
    },
    palavra45 = {
        nome: "ACEROLA",
        categoria: "FRUTAS"
    },
    palavra46 = {
        nome: "ABACAXI",
        categoria: "FRUTAS"
    },
    palavra47 = {
        nome: "BANANA",
        categoria: "FRUTAS"
    },
    palavra48 = {
        nome: "TOMATE",
        categoria: "FRUTAS"
    },
    palavra49 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra50 = {
        nome: "MANGA",
        categoria: "FRUTAS"
    }
];


//Função para sortear uma palavra do meu array de palavras
//objetoX é um objeto do array de palavras (bancoPalavras), é composto de nome + categoria.
sorteiaObjeto();

function sorteiaObjeto() {
    const objetoX = parseInt(Math.random() * bancoPalavras.length);

    palavraEscolhida = bancoPalavras[objetoX].nome;
    categoriaPalavra = bancoPalavras[objetoX].categoria;
}

//função que exibe na tela o objeto[nome, categoria] escolhido
//aparecer os espaços vazios de acordo com a palavra que for sorteada
exibeObjetoEscolhido();

function exibeObjetoEscolhido() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = categoriaPalavra;

    const palavraTela = document.getElementById("palavra-escolhida");
    palavraTela.innerHTML = "";

    //fazer com que a minha palavraEscolhida seja exibida apenas na forma de traços
    for (i = 0; i < palavraEscolhida.length; i++) {
        if (mostrador[i] == undefined) {
            mostrador[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + mostrador[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + mostrador[i] + "</div>"
        }
    }
}

//marca as teclas de verde ou vermelho se corretas ou incorretas
teclas.forEach(function (clique) {

    clique.addEventListener('click', function (teclaNaTela) {

        let percorrePalavra = palavraEscolhida.split("");
        let teclaClicada = teclaNaTela.target.textContent;

        if (percorrePalavra.includes(teclaClicada)) {
            teclaNaTela.target.classList.add("verde");
        } else {
            teclaNaTela.target.classList.add("vermelho");
        };
    });
});

//identifica o click do jogador, marca a tecla como já clicada e desabilita
function identificaClick(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (totalChances > 0) {
        validaLetraEscolhida(letra);
        exibeObjetoEscolhido();
    }
}

function playAgain() {
    location.reload();
    gameOver.style.display = "none";
    youWin.style.display = "none";
}

/*verifica se a letra que o jogador digitou existe dentro da palavra sorteada*/
function validaLetraEscolhida(letra) {
    //const existencia armazena as letras digitadas que existem na palavra escolhida
    const existencia = palavraEscolhida.indexOf(letra);
    if (existencia < 0) {
        totalChances--
        mostraDino();


        if (totalChances == 0) {
            setInterval(over, 600);
            mostraPalavraEscolhida();
        }

        //ainda tem tentativas?
    } else {
        for (i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] == letra) {
                mostrador[i] = letra;
            }
        }

    }

    let vitoria = true;
    for (i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] != mostrador[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        setInterval(win, 600);
        totalChances = 0;
    }
}

/*troca as imagens de acordo com o número de chances restantes*/
function mostraDino() {
    switch (totalChances) {
        case 5:
            document.getElementById("imagem").style.background = "url('img/dino1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('img/dino2.png')";
            break;

        case 3:
            document.getElementById("imagem").style.background = "url('img/dino3.png')";
            break;

        case 2:
            document.getElementById("imagem").style.background = "url('img/dino4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('img/dino5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('img/dino6.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('img/dino0.png')";
            break;
    }
}
/*exibe as mensagens de vitória e de derrota*/
function mostraPalavraEscolhida() {
    let palavraMostrada = document.getElementById("palavraEscolhida-modal");
    palavraMostrada.textContent = palavraEscolhida;
};

/*botão dino - recarrega a página*/
btnReiniciar.addEventListener("click", function () {
    location.reload();
});

function over() {
    gameOver.style.display = "flex";
};

function win() {
    youWin.style.display = "flex";
}