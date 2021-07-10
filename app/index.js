import ShowDatas from './view/ShowDatas.js';

window.onload = () => {
    new ShowDatas().showLastProducts();
    new ShowDatas().getAuthAccount();
}