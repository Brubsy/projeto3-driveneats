//Selection of the products definition
let dishSelected = null;
let drinkSelected = null;
let dessertSelected = null;

let price;
let priceNumbers;
let dishPrice;
let drinkPrice;
let dessertPrice;

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

    dishSelected = dish.querySelector("h4").innerHTML;
    dishPriceText = dish.querySelector("p").innerHTML;
    priceNumbers = dishPriceText.substring(3,8);
    dishPrice = priceNumbers.replace(/,/, '.');
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

    drinkSelected = drink.querySelector("h4").innerHTML;
    drinkPriceText = drink.querySelector("p").innerHTML;
    priceNumbers = drinkPriceText.substring(3,8);
    drinkPrice = priceNumbers.replace(',', '.');
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

    dessertSelected = dessert.querySelector("h4").innerHTML;
    dessertPriceText = dessert.querySelector("p").innerHTML;
    priceNumbers = dessertPriceText.substring(3,8);
    dessertPrice = priceNumbers.replace(/,/, '.');
}

//Buttons properties and changes defintions
let button = document.querySelector("button");
button.disabled = true;


function activateButton() {
    if (dishSelected !== null && drinkSelected !== null && dessertSelected !== null) {

        button.disabled = false;
        let text = document.querySelector("button h6");

        button.classList.remove("inactive");
        button.classList.add("active");
        text.innerHTML = "Fechar pedido";
        text.style.fontWeight = "700";
    }
}

//Order defintions
let name;
let address;
let totalPriceText;

function orderFood() {
    name = prompt("Qual o seu nome?");
    address = prompt("Por favor, informe o seu endereço:");

    let sumPrice = Number(dishPrice) + Number(drinkPrice) + Number(dessertPrice);
    sumPrice = sumPrice.toFixed(2);
    totalPriceText = "R$ " + sumPrice.toString().replace('.', ',');

    document.querySelector(".order-choices span:first-child").innerText = dishSelected;
    document.querySelector(".order-choices span:nth-child(2)").innerText = drinkSelected;
    document.querySelector(".order-choices span:nth-child(3)").innerText = dessertSelected;

    document.querySelector(".order-prices span:first-child").innerText = dishPriceText;
    document.querySelector(".order-prices span:nth-child(2)").innerText = drinkPriceText;
    document.querySelector(".order-prices span:nth-child(3)").innerText = dessertPriceText;
    document.querySelector(".order-prices span:last-child").innerText = totalPriceText;

    let changeDisplay = document.querySelector(".content");
    changeDisplay.style.display = "none";

    let confirmBox = document.querySelector(".confirm-box");
    confirmBox.classList.remove("no-order");
}

function orderConfirmed() {
    let message = `Olá, gostaria de fazer o pedido:` + '\n' + `-Prato: ${dishSelected}` + '\n' + `-Bebida: ${drinkSelected}` + '\n' + `-Sobremesa: ${dessertSelected}` + '\n' + `Total: ${totalPriceText} \n\n Nome: ${name} \n Endereço: ${address}`;
    let whatsappMessage = window.encodeURIComponent(message);
    window.open("https://wa.me/5521996947704?text="+ whatsappMessage);
}

function cancel() {
    let changeDisplay = document.querySelector(".content");
    changeDisplay.style.display = "initial";

    let confirmBox = document.querySelector(".confirm-box");
    confirmBox.classList.add("no-order");
}
