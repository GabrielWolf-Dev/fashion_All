import Datas from "../controller/Datas.js";
import Helpers from "../helpers.js";

export default class ShowDatas extends Datas {
    constructor(){
        super();

        const $ = document.querySelector.bind(document);
        this._boxLastProducts = $('#boxLastProducts');
        this._toggleAuth = $('#toggleAuth');

        this._lastProducts = this.lastProducts();
        this._authAccount = this.authAccount();
    }

    async showLastProducts() {
        const lastProdResolved =  await Promise.resolve(this._lastProducts); 
        console.log(lastProdResolved);
        lastProdResolved.forEach(data => {
            this._boxLastProducts.innerHTML += `
                <div class="card text-center col-3 m-4" style="width: 25rem;">
                    <img src="${data.img}" class="card-img-top p-2 d-block mx-auto" alt="${data.product}" style="height: 16rem; width: 12rem;">
                    <div class="card-body">
                      <h5 class="card-title">${data.product}</h5>
                      <p class="card-text">R$${data.preco},00</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            `;
        });
    }

    async getAuthAccount() {
        if(localStorage.getItem('userId') !== null){
            const getAccountResolved = await Promise.resolve(this._authAccount);
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
}