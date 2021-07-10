import Validate from '../controller/Validate.js';
import Helpers from '../helpers.js';

export default class InputLogin {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._emailLog = $('#emailLog');
        this._passLog = $('#passLog');
        this._getAccount = new Validate().getAccounts();
        this._token = null;
    }

    async checkLogin(eventForm){
        const accounts = await Promise.resolve(this._getAccount);
        const elements = Array.from(eventForm.target.elements);
        const inputs = elements.filter(element => element.id === "emailLog" || element.id === "passLog");
        
        accounts.forEach(account => {
            inputs.forEach(input => {
                if(this._emailLog.value == account.email && this._passLog.value == account.password) {
                    // Generate Token and adding the API.
                    this._token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
                    new Validate().tokenAccount(account.id, this._token);
                    JSON.stringify(localStorage.setItem('userId', account.id));
                    
                    // Redirect for home page:
                    window.location.href = 'http://127.0.0.1:5500/index.html';

                    // Ui message validate inputs:
                    input.classList.add('is-valid');
                    input.classList.remove('is-invalid');
                }else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                }
            });
        });
    }
}