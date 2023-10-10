const grid = document.querySelector('.grid');
const espanJogador = document.querySelector('.jogador');
const espanJogadas = document.querySelector('.jogadas');

const frenteCartas = [
    { nome: 'ribossomo' },
    { nome: 'aminoascido' },
    { nome: 'DNA' },
    { nome: 'RNA' },
    { nome: 'celula' },
];

const criarElemento = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let primeiraCarta = '';
let segundaCarta = '';
let jogadas = 0;

const fimDoJogo = () => {
    const cartaDesabilitada = document.querySelectorAll('.cartaCerta');
    if (cartaDesabilitada.length === 10) {
        localStorage.setItem('jogadas', jogadas);
        setTimeout (() => {
            window.location = 'fim.html'
        },1000);
    };
};

const validarCarta = () => {
    const primeiraSelecionada = primeiraCarta.getAttribute('data-frente');
    const segundaSelecionada = segundaCarta.getAttribute('data-frente');
    if (primeiraSelecionada === segundaSelecionada) {
        primeiraCarta.firstChild.classList.add('cartaCerta');
        segundaCarta.firstChild.classList.add('cartaCerta');

        primeiraCarta = '';
        segundaCarta = '';

        fimDoJogo();
    } else {
        setTimeout(() => {
        primeiraCarta.classList.remove('mostrarCarta');
        segundaCarta.classList.remove('mostrarCarta');

        primeiraCarta = '';
        segundaCarta = '';
    }, 500)
    }
};

const mostrarCarta = ({ target }) => {
    if (target.parentNode.className.includes('mostrarCarta')) {
        return;
    };

    if (primeiraCarta === '') {
        target.parentNode.classList.add('mostrarCarta');
        primeiraCarta = target.parentNode;
        jogadas++;
        jogada()
    } else if (segundaCarta === '') {
        target.parentNode.classList.add('mostrarCarta');
        segundaCarta = target.parentNode;
        jogadas++;
        jogada()
        validarCarta();
    }
};

const criarCarta = (frenteCarta) => {
    const carta = criarElemento('div', 'carta');
    const frente = criarElemento('div', 'face frente');
    const tras = criarElemento('div', 'face tras');

    carta.appendChild(frente);
    carta.appendChild(tras);
    grid.appendChild(carta);

    frente.style.backgroundImage = `url('img/${frenteCarta.nome}.png')`;

    carta.addEventListener('click', mostrarCarta);
    carta.setAttribute('data-frente', frenteCarta.nome); 
    return carta;
};

const loadGame = () => {
    const duplicarCartas = [...frenteCartas, ...frenteCartas];
    const aleatorizarCarta = duplicarCartas.sort(() => Math.random() - 0.5);

    aleatorizarCarta.forEach(frenteCarta => {
        criarCarta(frenteCarta);
    });
};

const jogada = () => {
    espanJogadas.innerHTML = jogadas
};

window.onload = () => {
    espanJogador.innerHTML = localStorage.getItem('player');
    loadGame();
};


