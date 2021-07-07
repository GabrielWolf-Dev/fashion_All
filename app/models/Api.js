export default class Api {
    constructor(complement, params = '') {
        this._defaultUrl = 'http://localhost:3000/';
        this._complementUrl = complement;
        this._params = params;
    }

    async getApi(){
        const response = await fetch(this._defaultUrl + this._complementUrl + this._params);
        const data = await response.json();
        return data;
    }

    async registerAccount(data) {
        const postStructure = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        };
        const response = await fetch(this._defaultUrl + this._complementUrl + this._params, postStructure);
        const dataPost = await response.json();
        return dataPost;
    }
}