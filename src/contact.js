import './style.css';
//import Map from 'map.png';


function loadContact() {
    const content = document.getElementById("content");
    const phone = document.createElement("p");
        phone.textContent = "123-456-7890"
    const address = document.createElement("p")
        address.innerHTML = "7300 Legacy Dr, <br /> Plano, TX 75024"
    //const map = newImage
        //map.src = Map;

    content.textContent = "";
    content.appendChild(phone);
    content.appendChild(address);
    //content.appendChild(map);

}

export { loadContact }