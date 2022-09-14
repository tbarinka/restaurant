import './style.css';
import Pizza from './pizza.png';

const content = document.getElementById("content");

const homeImage = new Image();
homeImage.src = Pizza;
homeImage.classList.add("image");

function loadHome() {

    
    const p = document.createElement('p');
    p.textContent = "Tony Pizza makes a pie and a slice with that authentic Tony touch.";
    
    content.textContent = "";

    content.appendChild(homeImage);
    content.appendChild(p);
}

export { homeImage, loadHome };