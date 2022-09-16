import './style.css';
import { loadHome } from './home.js';
import { loadContact } from './contact.js';
import { loadMenu } from './menu.js';


function loadHeader() {
    const header = document.createElement('div');
        header.classList.add("header");
    const content = document.getElementById("content");
    const redStrip = document.createElement('div');
        redStrip.classList.add('red-strip');
    const container = document.createElement('div');
        container.classList.add('header-container');
    const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
    const homeBtn = document.createElement('button');
        homeBtn.textContent = "Home";
        homeBtn.classList.add('header-button');
        homeBtn.addEventListener('click', (e) => {
                loadHome();
        });
    const contactBtn = document.createElement('button');
        contactBtn.textContent = "Contact";
        contactBtn.classList.add('header-button');
        contactBtn.addEventListener('click', (e) => {
            loadContact();
        });
    const menuBtn = document.createElement('button');
        menuBtn.textContent = "Menu";
        menuBtn.classList.add('header-button');
        menuBtn.addEventListener('click', (e) => {
            loadMenu();
        });
    const h = document.createElement('h1');
    h.textContent = "Tony Pizza Slice and Pie"
    h.classList.add('title');


    document.body.insertBefore(header, content);
    header.appendChild(redStrip);
    header.appendChild(container);
        container.appendChild(h);
        container.appendChild(buttonContainer);
            buttonContainer.appendChild(homeBtn);
            buttonContainer.appendChild(contactBtn);
            buttonContainer.appendChild(menuBtn);
}

export { loadHeader }