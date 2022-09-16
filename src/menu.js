import './style.css';
import Pizza from './pizza.png';
const menuImage = new Image();
menuImage.src = Pizza;
menuImage.classList.add("image");

function loadMenu() {
    const content = document.getElementById("content");
    
    content.textContent = "";
    content.appendChild(menuImage);
    loadMenuContainer();

};

function loadMenuContainer() {
    const div = document.createElement('div');
        div.classList.add('menu-container');
    content.appendChild(div);

}

export { loadMenu }