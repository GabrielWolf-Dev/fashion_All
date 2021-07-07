import Api from '../models/Api.js';

export default class GetProducts {
    async lastProducts() {
        return await new Api('products/', '?_sort=id&_order=desc&_limit=8').getApi();
    }
}