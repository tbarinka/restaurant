import './style.css';


function slices() {
    const content = document.getElementById("content");
    const container = document.createElement('div');
    const slice = document.createElement("h3");
        slice.textContent = "Pizza by Slice";
    const basil = document.createElement("button");
        basil.classList.add('menuButton');
        basil.textContent = "basil";
    const special = document.createElement("button");
    const pepperoni = document.createElement("button");

    content.textContent = "";

    content.appendChild(container);
    container.appendChild(slice);
    container.appendChild(basil);

};

function loadMenu() {
    slices();
}

export { loadMenu }