import { loadHome } from './home.js';

const homeBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const head = document.createElement('div');
const content = document.getElementById("content");

document.body.insertBefore(head, content);
head.appendChild(homeBtn);
head.appendChild(contactBtn);
head.appendChild(menuBtn);

loadHome();



