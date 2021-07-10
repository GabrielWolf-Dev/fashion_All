import DatasHome from "../controller/DatasHome.js";

export default class ShowDatas extends DatasHome{
    constructor(){
        super();

        const $ = document.querySelector.bind(document);
        this._boxLastProducts = $('#boxLastProducts');
        this._toggleAuth = $('#toggleAuth');

        this._lastProducts = this.lastProducts();
        this._authAccount = this.authAccount();
    }

    async showLastProducts() {
        const lastProdResolved = await Promise.resolve(this._lastProducts); 

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
        const getAccountResolved = await Promise.resolve(this._authAccount);
        JSON.stringify(localStorage.setItem('token', getAccountResolved[0].token));

        this._toggleAuth.innerHTML += this.validateAuth(getAccountResolved[0]);
    }

    validateAuth(account) {
        if(account.token === localStorage.getItem('token')){
            return `
                <li class="nav-item">
                    <a href="account.html" class="btn btn-outline-light mx-1 my-sm-1">${account.name}</a>
                </li>
            `;
        } else {
            return `
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