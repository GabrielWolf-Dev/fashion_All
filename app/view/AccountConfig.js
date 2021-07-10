import Datas from '../controller/Datas.js';
import Helpers from '../helpers.js';
import Validate from '../controller/Validate.js';

export default class AccountConfig extends Validate {
    constructor() {
        super();
        const $ = document.querySelector.bind(document);
        this._authAccount = new Datas().authAccount();

        this._toggleAuth = $('#toggleAuth');
        this._btnLogout = $('#logout');
        this._deleteBtn = $('#deleteBtn');
        this._perfilTitle = $('#perfil');
        this._name = $('#name');
        this._cpf = $('#cpf');
        this._email = $('#email');
        this._pass = $('#pass');

        this._inputs = [
            this._name,
            this._cpf
        ];
    }

    async validateAccount() {
        if(localStorage.getItem('userId') !== null){
            const accountResolved = await Promise.resolve(this._authAccount);
            accountResolved[0].token === localStorage.getItem('token') ? this.showAccount(accountResolved[0]) : this.redirect();
        } else {
            this.redirect();
        }   
    }

    showAccount(datasApi) {
        this._toggleAuth.innerHTML += new Helpers().validateHeader(datasApi);
        this._perfilTitle.textContent = 'Perfil de ' + datasApi.name;

        this._name.value = datasApi.name;
        this._email.value = datasApi.email;
        this._pass.value = datasApi.email;
        this._cpf.value = datasApi.cpf;

        this._btnLogout.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'http://127.0.0.1:5500/index.html';
        });

        this._deleteBtn.addEventListener('click', () => {
            window.location.href = 'http://127.0.0.1:5500/index.html';
            confirm('Você tem certeza que deseja deletar a sua conta?', new Datas().deleteAccount());
            localStorage.clear();
        });
    }

    updateDatas(){
        const newDatas = {
            name: this._name.value,
            cpf: this._cpf.value,
        };

        new Helpers().messageUiValidation(
            this._inputs,
            this.checkName(this._name.value),
            this.checkCpf(this._cpf.value)
        );
        new Datas().updateAccount(newDatas);
        alert('Atualização realizada com sucesso!');
    }

    redirect(){
        alert(
            'Autenticação inválida, por favor realize o login para acessar o seu perfil',
             window.location.href = "http://127.0.0.1:5500/login.html"
            );
            localStorage.clear();
    }
}