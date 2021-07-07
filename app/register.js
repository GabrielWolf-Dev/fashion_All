import Input from './view/Input.js';

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    new Input().inputsRegister();
});
