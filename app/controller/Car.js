import Datas from "./Datas.js";

export default class Car {
    constructor() {
        this._btns = document.querySelectorAll('#btnsAddCar');
        this._authAccount = new Datas().authAccount();
        this._arrProducts = [];
    }

    async addCar(){
        const authDatas = await Promise.resolve(this._authAccount);
        this._btns.forEach(btns => btns.addEventListener('click', (e) => authDatas[0] !== undefined ? this.validateToken(authDatas[0].token, e) : this.redirect()));
    }

    validateToken(token, el) {
        const navItemCart = document.querySelector('.nav-item-cart');
        
        if(token === localStorage.getItem('token')){
            //Armazenando cada produto num array que vai ser enviado no LocalStorage:
            const productSelected = el.path[2];
            const productId = productSelected.dataset.id;
            this._arrProducts.push(`${productId}`);
            JSON.stringify(localStorage.setItem('productsId', this._arrProducts));
            // console.log(Array.from(localStorage.getItem('productsId').split(',')));

            // Criando o span:
            const span = document.createElement('span');
            span.classList.add('products-car');
            span.textContent = this._arrProducts.length;
            navItemCart.appendChild(span);
            
        } else {
            redirect();
        }
    }

    redirect(){
        const loginPage = window.location.href = "http://127.0.0.1:5500/login.html";
        alert('Por favor, faça o login da sua conta para realizar a compra', loginPage);
    }
}