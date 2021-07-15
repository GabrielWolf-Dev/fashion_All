import Datas from "./Datas.js";

export default class Car {
    constructor() {
        this._btns = document.querySelectorAll('#btnsAddCar');
        this._authAccount = new Datas().authAccount();
    }

    async addCar(){
        const authDatas = await Promise.resolve(this._authAccount);
        this._btns.forEach(btns => btns.addEventListener('click', () => authDatas[0] !== undefined ? this.validateToken(authDatas[0].token) : this.redirect()));
    }

    validateToken(token) {
        if(token === localStorage.getItem('token')){
            alert('passou!')
        } else {
            alert('não passou!');
        }
    }

    redirect(){
        const loginPage = window.location.href = "http://127.0.0.1:5500/login.html";
        alert('Por favor, faça o login da sua conta para realizar a compra', loginPage);
    }
}