export default function home() {
    const content = document.querySelector('#content');
    
    // main div that we add to #content
    const home = document.createElement('div');
    home.id = "home-page";

    /////////////////////////////////////////////////////
    const homePageContent = document.createElement('div');
    homePageContent.id = "home-page-content";
    home.appendChild(homePageContent)

    // div for title and icon
    const titleAndIcon = document.createElement('div');
    titleAndIcon.id = "title-and-icon";
    
    // Here we add the title    
    const restaurantTitle = document.createElement('p');
    restaurantTitle.id = "title";
    restaurantTitle.innerHTML = "Iskender Kebab";
    titleAndIcon.appendChild(restaurantTitle);

    // here's the icon 
    const icon = document.createElement('img');
    icon.id = "icon";
    icon.src = "/src/img/kebab.png";
    titleAndIcon.appendChild(icon);

    // here we add both icon and title to the special div we made on line 14
    homePageContent.appendChild(titleAndIcon);

    const greetingMessageAndButton = document.createElement('div');
    greetingMessageAndButton.id = "message-and-button";

    // greeting message on the main page
    const greetingMessage = document.createElement('p');
    greetingMessage.id = "greeting-message";
    greetingMessage.innerHTML = "Home of the best doner kebab. We make our food with love. \n Come and see us!"
    greetingMessageAndButton.appendChild(greetingMessage);

    // go to the menu button 
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');
    btn.id = "menu-btn";
    btn.innerHTML = "Menu";
    btnDiv.appendChild(btn);
    btnDiv.id = "button-div";
    greetingMessageAndButton.appendChild(btnDiv);

    homePageContent.appendChild(greetingMessageAndButton);

    content.appendChild(home);
}