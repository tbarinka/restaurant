import { loadHome } from './home.js';
import './style.css';

const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
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



