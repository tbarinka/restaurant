import './style.css';
import Map from './map.png';
    const myMap = new Image
    myMap.src = Map;
    myMap.classList.add('map');


function loadContact() {
    const content = document.getElementById("content");
    const brk = document.createElement('div');
        brk.innerHTML = "<br /><br /><br /><br /><br /><br /><br /> "
    

    content.textContent = "";
    content.appendChild(brk);
    content.appendChild(contactInfo());
}

function leftBox() {

    const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');
    const contact = document.createElement('h1');
        contact.innerHTML = "Contact Us"
    const phone = document.createElement("div");
        phone.textContent = "📞    123 456 789";
    const address = document.createElement("div")
        address.innerHTML = "🏠    7300 Legacy Dr, <br /> Plano, TX 75024"
        address.style.textAlign = 'center';
    
    infoBox.appendChild(contact);
    infoBox.appendChild(phone);
    infoBox.appendChild(address);

    return infoBox;
}
function contactInfo() {
    const div = document.createElement('div');
        div.classList.add('contact-info');
    
    div.appendChild(leftBox());
    div.appendChild(myMap);

    return div

}

export { loadContact }