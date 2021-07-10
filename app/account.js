import AccountConfig from './view/AccountConfig.js';

window.onload = () => {
    new AccountConfig().validateAccount();

    document.querySelector('#form').addEventListener('submit', () => new AccountConfig().updateDatas());
}