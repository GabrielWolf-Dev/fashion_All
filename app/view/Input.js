import Validate from '../controller/Validate.js';

export default class Input extends Validate{
    constructor(){
        super();
        const $ = document.querySelector.bind(document);
        this._name = $('#name');
        this._pass = $('#pass');
        this._email = $('#email');
        this._cpf = $('#cpf');
    }
    
    inputsRegister() {
        this.messageUiValidation(this._name, this.checkName(this._name.value));
        this.messageUiValidation(this._cpf, this.checkCpf(this._cpf.value));
        this.messageUiValidation(this._email, this.checkEmail(this._email.value));
        this.messageUiValidation(this._pass, this.checkPass(this._pass.value));

        
        this.postDatas(
            this._name,
            this._pass,
            this._email,
            this._cpf
        );
    }

    

    messageUiValidation(input, callback){
        if(callback === false){
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
        
    }
}