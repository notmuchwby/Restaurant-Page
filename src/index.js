import home from './home';
import menu from './menu';
import contact from './contact';

home();

const content = document.querySelector('#content')

// buttons
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

homeButton.addEventListener('click', function() {
    content.innerHTML = "";
    home();
});

menuButton.addEventListener('click', function() {
    content.innerHTML = "";
    menu();
});

contactButton.addEventListener('click', function() {
    content.innerHTML = "";
    contact();
});

// button that goes after the message
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function() {
    content.innerHTML = "";
    menuBtn.onclick = null;
    menu();
})

