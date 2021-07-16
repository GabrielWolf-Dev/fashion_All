import AccountConfig from './view/AccountConfig.js';
import Car from './controller/Car.js';

window.onload = () => {
    new AccountConfig().validateAccount();
    new Car().showDatasCar();

    document.querySelector('#form').addEventListener('submit', () => new AccountConfig().updateDatas());
}