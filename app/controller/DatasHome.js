import Api from '../models/Api.js';

export default class DatasHome {
    async lastProducts() {
        return await new Api('products/', '?_sort=id&_order=desc&_limit=8').getApi();
    }

    async authAccount() {
        return await new Api('accounts', `?id=${JSON.parse(localStorage.getItem('userId'))}`).getApi();
    }
}