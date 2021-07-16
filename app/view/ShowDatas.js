import Datas from "../controller/Datas.js";
import Helpers from "../helpers.js";
import Car from "../controller/Car.js";

export default class ShowDatas extends Datas {
    constructor(){
        super();

        const $ = document.querySelector.bind(document);
        this._boxLastProducts = $('#boxLastProducts');
        this._toggleAuth = $('#toggleAuth');
        this._boxAllProducts = $('#allProducts');
    }

    async showLastProducts() {
        const lastProdResolved =  await Promise.resolve(this.lastProducts()); 
        lastProdResolved.forEach(data => this._boxLastProducts.innerHTML += this.productLayout(data));
        new Car().addCar();
    }

    async showAllProducts() {
        const allProdResolved = await Promise.resolve(this.allProducts());
        allProdResolved.forEach(data => this._boxAllProducts.innerHTML += this.productLayout(data));
        new Car().addCar();
    }

    async getAuthAccount() {
        if(localStorage.getItem('userId') !== null){
            const getAccountResolved = await Promise.resolve(this.authAccount());
            JSON.stringify(localStorage.setItem('token', getAccountResolved[0].token));

            this._toggleAuth.innerHTML += new Helpers().validateHeader(getAccountResolved[0]);
        } else {
            this._toggleAuth.innerHTML += `
                <li class="nav-item">
                    <a href="login.html" class="btn btn-outline-light mx-1 my-sm-1">Logar</a>
                </li>
                <li class="nav-item">
                    <a href="register.html" class="btn btn-outline-light mx-1 my-sm-1">Cadastrar</a>
                </li>
            `;
        }
    }

    productLayout(data){
        return `
            <div class="card text-center col-3 m-4" style="width: 25rem;" data-id=${data.id}>
                <img src="${data.img}" class="card-img-top p-2 d-block mx-auto" alt="${data.product}" style="height: 16rem; width:  12rem;">
                <div class="card-body">
                  <h5 class="card-title">${data.product}</h5>
                  <p class="card-text">R$ ${data.preco},00</p>
                  <button id="btnsAddCar" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
}