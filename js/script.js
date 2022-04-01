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
}