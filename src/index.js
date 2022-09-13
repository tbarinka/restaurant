import { loadHome } from './home.js';
import './style.css';

const homeBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const header = document.createElement('div');
    header.classList.add("header");
const content = document.getElementById("content");

document.body.insertBefore(header, content);
header.appendChild(homeBtn);
header.appendChild(contactBtn);
header.appendChild(menuBtn);

loadHome();



