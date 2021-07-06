import Api from '../models/Api.js';

export default class GetProducts {
    constructor(){
        this._urlApi = new Api('products/');
    }

    async lastProducts() {
        const response = await fetch(this._urlApi.url +'?_sort=id&_order=desc&_limit=8');
        const data = await response.json();
        return data;
    }
}