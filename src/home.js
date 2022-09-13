import './style.css';
import Pizza from './pizza.png';


function header() {
    const h = document.createElement('h1');
    h.textContent = "Tony Pizza"
    h.classList.add('header');
    return h;
}
const homeImage = new Image();
homeImage.src = Pizza;

function blurb() {
    const p = document.createElement('p');
    p.textContent = "Tony Pizza makes a pie and a slice with that authentic Tony touch.";
    return p;
}


export { header, homeImage, blurb };