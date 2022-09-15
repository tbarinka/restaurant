import './style.css';
import Pizza from './pizza.png';
import GrubIcon from './grubhub.png';
import UberIcon from './uber-eats.png';


const content = document.getElementById("content");

const homeImage = new Image();
homeImage.src = Pizza;
homeImage.classList.add("image");

const grubIcon = new Image();
grubIcon.src = GrubIcon;
    grubIcon.classList.add("icon")
const uberIcon = new Image();
uberIcon.src = UberIcon;
    uberIcon.classList.add("icon");


function loadHome() {
    content.textContent = "";
    content.appendChild(homeImage);

    loadFooter();
}

function loadFooter() {
    const footer = document.createElement('div');
        footer.classList.add('foot');
    const brk = document.createElement('div');
        brk.innerHTML = "<br /><br /> "

    content.appendChild(footer);
    footer.appendChild(loadDelivery())
    footer.appendChild(loadHours());
    content.appendChild(brk);
}

function loadDelivery() {
    const deliver = document.createElement('div');
        deliver.classList.add('info-box');
    const title = document.createElement('h1');
        title.classList.add('info-h1');
        title.textContent = "Order Delivery";
    const iconContain = document.createElement('div');
        iconContain.classList.add("icon-contain");

    deliver.appendChild(title);
    deliver.appendChild(iconContain);
        iconContain.appendChild(uberIcon);
        iconContain.appendChild(grubIcon);

    return deliver;
}

function loadHours() {

    const hours = document.createElement('div');
        hours.classList.add('info-box');
    //const welcome = document.createElement('h2');
        //welcome.innerHTML = "Welcome!";
    const title = document.createElement('h1');
        title.classList.add('info-h1');
        title.textContent = "Hours of Operation";
    const weekdays = document.createElement('div');
        weekdays.classList.add('info-element');
        weekdays.textContent = "Mon. - Thurs.: 11am - 8pm"
    const friday = document.createElement('div');
       friday.classList.add('info-element');
       friday.textContent = "Fri.: 11am - 12am"
    const saturday = document.createElement('div');
        saturday.classList.add('info-element');
        saturday.textContent = "Sat.: 1pm - 12am"
    const sunday = document.createElement('div');
        sunday.classList.add('info-element');
        sunday.textContent = "Sun.: 1pm - 6pm";

    
    //hours.appendChild(welcome);
    hours.appendChild(title);
    hours.appendChild(sunday);
    hours.appendChild(weekdays);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    return hours;
}

export { homeImage, loadHome };