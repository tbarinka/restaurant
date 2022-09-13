import './style.css';

function header() {
    const h = document.createElement('h1');
    h.textContent = "Tony Pizza"
    h.classList.add('header');
    return h;
}

export { header };