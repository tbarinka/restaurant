import './style.css';
import Pizza from './pizza.png';

const content = document.getElementById("content");

const homeImage = new Image();
homeImage.src = Pizza;
homeImage.classList.add("image");

function loadHome() {
    content.textContent = "";
    content.appendChild(homeImage);
}

export { homeImage, loadHome };