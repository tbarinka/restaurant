import './style.css';
import GrubIcon from './grubhub.png';
import UberIcon from './uber-eats.png';

const gIcon = new Image();
gIcon.src = GrubIcon;
gIcon.classList.add("footer-icon2");

const uIcon = new Image();
uIcon.src = UberIcon;
uIcon.classList.add("footer-icon1");


function loadFooter() {

    const footer = document.createElement('div');
        footer.classList.add("footer");
    const content = document.getElementById("content");

    const div = document.createElement('div');
    const span = document.createElement('span');
        span.classList.add("footer-container");
    const spanText = document.createElement('spantext');
        spanText.textContent = "Order Delivery:"
        spanText.classList.add('footer-text');

    content.after(footer);
    footer.after(span);
    span.appendChild(spanText);
    span.appendChild(uIcon);
    span.appendChild(gIcon);
   
};

export { loadFooter }