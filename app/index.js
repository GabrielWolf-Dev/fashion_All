import ShowDatas from './view/ShowDatas.js';
import Car from './controller/Car.js';

window.onload = () => {
    new ShowDatas().showLastProducts();
    new ShowDatas().getAuthAccount();
    new Car().showDatasCar();
}