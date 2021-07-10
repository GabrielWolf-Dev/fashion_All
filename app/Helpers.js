export default class Helpers {
    constructor() {
        this._errorConfirmPass = false;
    }
    
    validateHeader(account) {
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

    messageUiValidation(inputs, ...callback){
        callback.forEach((callback, index) => {
            if(callback === false){
                inputs[index].classList.add("is-invalid");
                inputs[index].classList.remove("is-valid");
            } else {
                inputs[index].classList.remove("is-invalid");
                inputs[index].classList.add("is-valid");
            }
        });
    }
}