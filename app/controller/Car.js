import Api from "../models/Api.js";
import Datas from "./Datas.js";

export default class Car {
    constructor() {
        this._btns = document.querySelectorAll('#btnsAddCar');
        this._authAccount = new Datas().authAccount();
        this._arrProducts = [];
        this._productsStorage = [];
    }

    async addCar(){
        const authDatas = await Promise.resolve(this._authAccount);
        this._btns.forEach(btns => btns.addEventListener('click', (e) => authDatas[0] !== undefined ? this.validateToken(authDatas[0].token, e) : this.redirect()));
    }

    validateToken(token, el) {
        const navItemCart = document.querySelector('.nav-item-cart');
        
        if(token === localStorage.getItem('token')){
            // Armazenando cada produto num array que vai ser enviado no LocalStorage:
            const productSelected = el.path[2];
            const productId = productSelected.dataset.id;
            this._arrProducts.push(productId);
            JSON.stringify(localStorage.setItem('productsId', this._arrProducts));
            this._productsStorage = Array.from(localStorage.getItem('productsId').split(','));

            // Criando o span:
            const span = document.createElement('span');
            span.classList.add('products-car');
            span.textContent = this._productsStorage.length;
            navItemCart.appendChild(span);
        } else {
            redirect();
        }

        this.showDatasCar();
    }

    async showDatasCar() {
        const productsCar = document.querySelector('#productsCar');
        
        if(this._productsStorage.length === 0) {
            productsCar.textContent = 'Você não adicionou algum produto no carrinho :(';
        } else {
            const productsSelected = await new Api(
                'products?',
                this._productsStorage.map((productId, index) => index + 1 == this._productsStorage.length ? 'id=' + productId :
                'id=' + productId + '&').join('')
            ).getApi();
            console.log(productsSelected);
        }
    }

    redirect(){
        const loginPage = window.location.href = "http://127.0.0.1:5500/login.html";
        alert('Por favor, faça o login da sua conta para realizar a compra', loginPage);
    }
}