const input = document.querySelector('.nome');
const button = document.querySelector('.button');
const form = document.querySelector('.inicio');

const inputValido = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'game.html'
};

input.addEventListener('input', inputValido);
form.addEventListener('submit', handleSubmit);
