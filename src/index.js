import home from './home';
import menu from './menu';
import contact from './contact';
import tagandshoutouts from './tagandshoutouts';

const content = document.querySelector('#content')

export const renderContent = (elem) => {
    content.innerHTML = "";
    content.appendChild(elem)
}

renderContent(home());
tagandshoutouts();

// buttons
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');


homeButton.addEventListener('click', function() {
    renderContent(home());
    tagandshoutouts();
});

menuButton.addEventListener('click', function() {
    renderContent(menu());
    tagandshoutouts();
});

contactButton.addEventListener('click', function() {
    renderContent(contact());
    tagandshoutouts();
});





