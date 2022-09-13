import './style.css';
import Pizza from './pizza.png';

const content = document.getElementById("content");

const homeImage = new Image();
homeImage.src = Pizza;

function loadHome() {
    const h = document.createElement('h1');
    h.textContent = "Tony Pizza"
    h.classList.add('title');
    
    const p = document.createElement('p');
    p.textContent = "Tony Pizza makes a pie and a slice with that authentic Tony touch.";
    
    content.textContent = "";

    content.appendChild(h);
    content.appendChild(homeImage);
    content.appendChild(p);
}

export { homeImage, loadHome };