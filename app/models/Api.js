export default class Api {
    constructor(complement, params = '') {
        this._defaultUrl = 'http://localhost:3000/';
        this._complementUrl = complement;
        this._params = params;
    }

    async getApi(){
        try{
            const response = await fetch(this._defaultUrl + this._complementUrl + this._params);
            const data = await response.json();
            return data;
        } catch(error) {
            throw new Error(error);
        } 
    }

    async registerAccount(data) {
        const postStructure = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        };
        try{
            const response = await fetch(this._defaultUrl + this._complementUrl + this._params, postStructure);
            const dataPost = await response.json();
            return dataPost;
        } catch(error) {
            throw new Error(error);
        }
    }

    async insertToken(token){
        const tokenStructure = {
            method: "PATCH",
            body: JSON.stringify(token),
            headers: {
                'content-type': 'application/json'
            }
        };

        try {
            const response = await fetch(this._defaultUrl + this._complementUrl + this._params, tokenStructure);
            const dataPost = await response.json();
            return dataPost;
        } catch(error) {
            throw new Error(error);
        }
    }

    async updateDatas(newDatas) {
        const newDatasStructure = {
            method: "PATCH",
            body: JSON.stringify(newDatas),
            headers: {
                'content-type': 'application/json'
            }
        }

        try {
            const response = await fetch(this._defaultUrl + this._complementUrl + this._params, newDatasStructure);
            const dataPost = await response.json();
            return dataPost;
        } catch(error) {
            throw new Error(error);
        }
    }

    async deleteAccountAuth() {
        try {
            const response = await fetch(this._defaultUrl + this._complementUrl + this._params, { 
                method: "DELETE"
            });
            const dataPost = await response.json();
            return dataPost;
        } catch(error) {
            throw new Error(error);
        }
    }
}