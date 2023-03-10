const openBtn = document.querySelector(".menu-icon.open");
const closeBtn = document.querySelector('.menu-icon.close');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

openBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('mobile-visible');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.appendChild(overlay);
    body.classList.toggle('noScroll');
    overlay.addEventListener('click', hideNavbar);
})

function hideNavbar(){
    body.removeChild(document.querySelector('.overlay'));
    navLinks.classList.toggle('mobile-visible');
    body.classList.toggle('noScroll');
}

closeBtn.addEventListener('click', hideNavbar)