import Validate from '../controller/Validate.js';

export default class Input extends Validate{
    constructor(){
        super();
        const $ = document.querySelector.bind(document);
        this._name = $('#name');
        this._pass = $('#pass');
        this._confirmPass = $('#confirmPass');
        this._email = $('#email');
        this._cpf = $('#cpf');
    }
    
    inputsRegister() {
        this.messageUiValidation(this._name, this.checkName(this._name.value));
        this.messageUiValidation(this._cpf, this.checkCpf(this._cpf.value));
        this.messageUiValidation(this._email, this.checkEmail(this._email.value));
        this.messageUiValidation(this._pass, this.checkPass(this._pass.value, this._confirmPass.value));

        
        this.postDatas(
            this._name,
            this._pass,
            this._confirmPass,
            this._email,
            this._cpf
        );
    }

    

    messageUiValidation(input1, callback){
        if(callback === false){
            input1.classList.add("is-invalid");
            input1.classList.remove("is-valid");
        } else {
            input1.classList.remove("is-invalid");
            input1.classList.add("is-valid");
        }

        if(this._errorConfirmPass === true) {
            this._confirmPass.classList.add("is-invalid");
            this._confirmPass.classList.remove("is-valid");
        } else {
            this._confirmPass.classList.remove("is-invalid");
            this._confirmPass.classList.add("is-valid");
        }
    }
}