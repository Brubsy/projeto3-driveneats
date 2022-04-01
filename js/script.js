//Selection of the products definition
let dishSelected = null;
let drinkSelected = null;
let dessertSelected = null;

function chooseDish(dish) {
    let check = dish.querySelector("img:last-child");
    let previousDish = document.querySelector(".dish .selected");
    let previousCheck = document.querySelector(".dish .on");

    if (previousDish !== null) {
        previousDish.classList.remove("selected");
        previousCheck.classList.add("off");
        previousCheck.classList.remove("on");
    }

    dish.classList.add("selected");
    check.classList.remove("off");
    check.classList.add("on");

    dishSelected = !null;

}

function chooseDrink(drink) {
    let check = drink.querySelector("img:last-child");
    let previousDrink = document.querySelector(".drink .selected");
    let previousCheck = document.querySelector(".drink .on");

    if (previousDrink !== null) {
       previousDrink.classList.remove("selected");
       previousCheck.classList.add("off");
       previousCheck.classList.remove("on");

    }

    drink.classList.add("selected");
    check.classList.remove("off");
    check.classList.add("on");

    drinkSelected = !null;
}

function chooseDessert(dessert) {
    let check = dessert.querySelector("img:last-child");
    let previousDessert = document.querySelector(".dessert .selected");
    let previousCheck = document.querySelector(".dessert .on");

    if (previousDessert !== null) {
        previousDessert.classList.remove("selected");
        previousCheck.classList.add("off");
        previousCheck.classList.remove("on");

    }

    dessert.classList.add("selected");
    check.classList.remove("off");
    check.classList.add("on");

    dessertSelected = !null;
}

//Buttons properties and changes defintions
let button = document.querySelector("button");
button.disabled = true;


function activateButton() {
    if (dishSelected === true && drinkSelected === true && dessertSelected === true) {

        button.disabled = false;
        let text = document.querySelector("button h6");

        button.classList.remove("inactive");
        button.classList.add("active");
        text.innerHTML = "Fechar pedido";
        text.style.fontWeight = "700";
    }
}

function orderFood() {
    let mensagem = `Olá, gostaria de fazer o pedido:` + '\r\n' + `-Prato: ` + '\r\n' + `-Bebida:` + '\r\n' + `-Sobremesa: ` + '\r\n' + `Total: R$.`;
    console.log(mensagem);
    window.open("https:google.com");
}