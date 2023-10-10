const espanJogadas = document.querySelector('.jogadas');
const espanJogador = document.querySelector('.jogador');

const fim = () => {

    espanJogador.innerHTML = localStorage.getItem('player');
    let m2= localStorage.getItem('jogadas');
    if (m2 == 10) {
        espanJogadas.innerHTML = 'Incríveis 10'
    } else {
        espanJogadas.innerHTML = localStorage.getItem('jogadas');
    }
};

fim()