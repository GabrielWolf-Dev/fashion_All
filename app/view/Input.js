import Validate from '../controller/Validate.js';
import Helpers from '../helpers.js';

export default class Input extends Validate{
    constructor(){
        super();
        const $ = document.querySelector.bind(document);
        this._name = $('#name');
        this._pass = $('#pass');
        this._confirmPass = $('#confirmPass');
        this._email = $('#email');
        this._cpf = $('#cpf');
        this._inputs = [
            this._name,
            this._cpf,
            this._email,
            this._pass,
        ];
    }
    
    inputsRegister() {
        new Helpers().messageUiValidation(
            this._inputs,
            this.checkName(this._name.value),
            this.checkCpf(this._cpf.value),
            this.checkEmail(this._email.value),
            this.checkPass(this._pass.value, this._confirmPass.value)
        );

        
        this.postAccount(
            this._name,
            this._pass,
            this._confirmPass,
            this._email,
            this._cpf
        );

        if(this._errorConfirmPass === true) {
            this._confirmPass.classList.add("is-invalid");
            this._confirmPass.classList.remove("is-valid");
        } else {
            this._confirmPass.classList.remove("is-invalid");
            this._confirmPass.classList.add("is-valid");
        }
    }
}