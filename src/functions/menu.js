function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Noodles",
            "Noodles, Toppings of Choice, Sauce of Choice"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Pizza",
            "Wheat, Tomato Sauce, Cheese, Toppings of Choice"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Toppings",
            "Sausage, Ham, Onions, Corn, Garlic, Olives, Basil, Chilli, Pineapple, Shrimps"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Sauces",
            "Tomato Sauce"
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
} 

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;