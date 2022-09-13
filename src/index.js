import { header, homeImage, blurb } from './home.js';

console.log("test");
const content = document.getElementById("content");

content.appendChild(header());
content.appendChild(homeImage);
content.appendChild(blurb());


