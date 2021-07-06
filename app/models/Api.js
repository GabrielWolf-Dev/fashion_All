export default class Api {
    constructor(complement) {
        this._defaultUrl = 'http://localhost:3000/';
        this._complementUrl = complement;
    }

    get url(){
        return this._defaultUrl + this._complementUrl;
    }
}