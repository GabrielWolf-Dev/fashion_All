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
            // Storing each product in an array that will be shipped in LocalStorage:
            const productSelected = el.path[2];
            const productId = productSelected.dataset.id;
            this._arrProducts.push(productId);
            JSON.stringify(localStorage.setItem('productsId', this._arrProducts));
            this._productsStorage = Array.from(localStorage.getItem('productsId').split(','));

            // Creating the span:
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
        const btnConfirmBuy = document.querySelector('#btnConfirmBuy');
        let arrPrices = [];
        
        if(this._productsStorage.length === 0) {
            productsCar.textContent = 'Você não adicionou nenhum produto no seu carrinho :(';
        } else {
            productsCar.textContent = '';
            const productsSelected = await new Api(
                'products?',
                this._productsStorage.map((productId, index) => index + 1 == this._productsStorage.length ? 'id=' + productId :
                'id=' + productId + '&').join('')
            ).getApi();

            productsSelected.forEach(product => {
                arrPrices.push(product.preco);
                productsCar.insertAdjacentHTML('beforeend', `
                    <div class="card my-2" style="width: 14rem;">
                      <img class="card-img-top" src=${product.img} alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${product.product}</h5>
                        <p class="card-text">Preço: ${product.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                      </div>
                    </div>
                `);

                btnConfirmBuy.addEventListener('click', () => window.location.href = 'https://www.paypal.com/br/signin');
            });
            const totalPrice = arrPrices.reduce((accumulator, currentValue) => accumulator + currentValue);
            productsCar.insertAdjacentHTML('beforeend', `<h4 class="m-2">Total: ${totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>`);
        }
    }

    redirect(){
        const loginPage = window.location.href = "http://127.0.0.1:5500/login.html";
        alert('Por favor, faça o login da sua conta para realizar a compra', loginPage);
    }
}