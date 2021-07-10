import InputLogin from './view/InputLogin.js';

document.querySelector("#formLogin").addEventListener('submit', (e) => {
    e.preventDefault();
    new InputLogin().checkLogin(e);
});