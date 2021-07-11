import Api from '../models/Api.js';

export default class Datas {
    async lastProducts() {
        return await new Api('products/', '?_sort=id&_order=desc&_limit=8').getApi();
    }

    async allProducts() {
        return await new Api('products/', '?_sort=id&_order=asc').getApi();
    }

    async authAccount() {
        return await new Api('accounts', `?id=${JSON.parse(localStorage.getItem('userId'))}`).getApi();
    }

    async deleteAccount() {
        return await new Api('accounts', `/${JSON.parse(localStorage.getItem('userId'))}`).deleteAccountAuth();
    }

    async updateAccount(newDatas) {
        return await new Api('accounts', `/${JSON.parse(localStorage.getItem('userId'))}`).updateDatas(newDatas);
    }
}