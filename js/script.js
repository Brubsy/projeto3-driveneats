let dish;
let drink;
let dessert;
let dish_price;
let drink_price;
let dessert_price;
      
function chooseChicken() {
    document.getElementById("chicken").style.borderColor = "#32B72F";
    document.getElementById("ratatouille").style.borderColor = "white";
    document.getElementById("lamen").style.borderColor = "white";
    dish = "Frango Yin Yang";
    dish_price = 14.90;

}

function chooseRatatouille() {
    document.getElementById("chicken").style.borderColor = "white";
    document.getElementById("ratatouille").style.borderColor = "#32B72F";
    document.getElementById("lamen").style.borderColor = "white";
    dish = "Ratatouille";
    dish_price = 34.90;
}

function chooseLamen() {
    document.getElementById("chicken").style.borderColor = "white";
    document.getElementById("ratatouille").style.borderColor = "white";
    document.getElementById("lamen").style.borderColor = "#32B72F";
    dish = "Lámen Vegetariano";
    dish_price = 24.90;
}

function chooseCoke() {
    document.getElementById("coke").style.borderColor = "#32B72F";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("mupy").style.borderColor = "white";
    dish = "Coca-cola";
    dish_price = 34.90;
}

function chooseJuice() {
    document.getElementById("coke").style.borderColor = "#32B72F";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("mupy").style.borderColor = "white";
    dish = "Ratatouille";
    dish_price = 34.90;
}

function chooseMupy() {
    document.getElementById("coke").style.borderColor = "#32B72F";
    document.getElementById("juice").style.borderColor = "white";
    document.getElementById("mupy").style.borderColor = "white";
    dish = "Ratatouille";
    dish_price = 34.90;
}
