import Api from '../models/Api.js';

export default class Validate {
    constructor(){
        this._dataPost = {};
        this._allValidated = false;
        this._errorConfirmPass = false;
    }

    checkName(name){
        let amount = name.split(' ').length;
        let splitStrName = name.split(' ');

        if(amount >= 2) {
            for(let i=0; i < amount; i++){
                if(splitStrName[i].match(/^[A-Z]{1}[a-zçã]+$/)){
                    this._dataPost['name'] = name;
                }else {
                    return false;  
                }
            }
        } else {
            return false;
        }
    }

    checkCpf(cpf) {
        const regExp = /^\d{3}\.\d{3}\.\d{3}[-\/]?\d{2}$/;

        if(regExp.test(cpf)){
            this._dataPost['cpf'] = cpf;
        } else {
            return false;
        }
    }

    checkEmail(email) {
        const regExp = /^([a-z0-9_]+)@(gmail|hotmail|outlook|uol)\.com(\.br)?$/;

        if(regExp.test(email)){
            this._dataPost['email'] = email;
        }else {
            return false;
        }
    
    }

    checkPass(password, confirmPassword) {
        const regExp = /^[#?!@$%^&*-A-Za-z\d]{8,}$/;

        if(regExp.test(password)){
            this._errorConfirmPass = false;
            password === confirmPassword ? this._dataPost['password'] = password : this._errorConfirmPass = true;
        } else {
            return false;
        }
    }

    postDatas(...inputs){
        this._allValidated = inputs.every(input => input.classList.contains('is-valid'));

        if(this._allValidated === true){
            new Api('accounts').registerAccount(this._dataPost);
            const loginLink = "http://127.0.0.1:5500/login.html";
            alert("Cadastro realizado com sucesso!", window.location.href = loginLink);
        }
        
    }
}