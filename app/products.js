import ShowDatas from './view/ShowDatas.js';

window.onload = () => {
    new ShowDatas().showAllProducts();
    new ShowDatas().getAuthAccount();
}