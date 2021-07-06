import GetProducts from "../controller/GetProducts.js";

export default class ShowDatas {
    constructor(){
        this._lastProducts = new GetProducts().lastProducts();
    }

    async showLastProducts() {
        const box = document.querySelector('#boxLastProducts');
        const dataResolved = await Promise.resolve(this._lastProducts); 

        dataResolved.forEach(data => {
            box.innerHTML += `
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
}