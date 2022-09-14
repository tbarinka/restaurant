import { loadHome } from './home.js';
import './style.css';
import { loadContact } from './contact.js';

const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', (e) => {
        loadHome();
    });
const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', (e) => {
        loadContact();
    });
const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
const header = document.createElement('div');
    header.classList.add("header");
const content = document.getElementById("content");

document.body.insertBefore(header, content);
header.appendChild(homeBtn);
header.appendChild(contactBtn);
header.appendChild(menuBtn);

loadHome();



