import './style.css';
import Pizza from './pizza.png';
const menuImage = new Image();
menuImage.src = Pizza;
menuImage.classList.add("image");

import basilpizza from './menu-images/basilpizza.png'
const item0 = new Image();
item0.src = basilpizza;
item0.classList.add('menuItem')

import pepperoni from './menu-images/pepperoni.png';
const item1 = new Image();
item1.src = pepperoni
item1.classList.add('menuItem');

import vegetarian from './menu-images/vegetarian.png';
const item2 = new Image();
item2.src = vegetarian;
item2.classList.add('menuItem');

import whitepizza from './menu-images/whitepizza.png';
const item3 = new Image();
item3.src = whitepizza;
item3.classList.add('menuItem');

import stromboli from './menu-images/stromboli.png';
const item4 = new Image();
item4.src = stromboli;
item4.classList.add('menuItem');


//factory function to create menu items
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



function loadMenuContainer() {
    const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const menu = document.createElement('h1');
        menu.innerHTML = "Menu";
        menu.style.textAlign = "center";
        menu.classList.add('menu-title');
    menuContainer.appendChild(menu);

    const basil = createMenuItem("Basil Pizza", "Tomato sauce, fresh basil, mozzarella.");
    const vegetarian = createMenuItem("Vegetarian Pizza", "Tomato sauce, bell pepper, onion, mushroom, fresh garlic, mozzarella.")
    const pepperoni = createMenuItem("Pepperoni Pizza", "Tomato sauce, pepperoni, mozzarella.")
    const whitePizza = createMenuItem("White Pizza", "Olive oil, sundried tomatoes, fresh basil, parmesan, mozzarella.")
    const stromboli = createMenuItem("Stromboli", "Crispy dough pocket stuffed with mozzarella, pepperoni, sausage. Served with a side of tomato sauce.")
    menuContainer.appendChild(basil);
    menuContainer.appendChild(vegetarian);
    menuContainer.appendChild(pepperoni);
    menuContainer.appendChild(whitePizza);
    menuContainer.appendChild(stromboli);

}
function loadMenu() {
    const content = document.getElementById("content");
    
    content.textContent = "";
    content.appendChild(menuImage);
    loadMenuContainer();

};


export { loadMenu }