export default function menu() {
    const content = document.querySelector('#content');
    
    // main div
    const menu = document.createElement('div');
    menu.id = "menu";

    // whats inside
    const menuContent = document.createElement('div');
    menuContent.id = "menu-content";
    menu.appendChild(menuContent);

    // menu title
    const menuTitle = document.createElement('p');
    menuTitle.id = "menu-title";
    menuTitle.innerHTML = "Menu";
    menuContent.appendChild(menuTitle);

    // food and prices 
    const foodAndPrices = document.createElement('div');
    foodAndPrices.id = "food-and-prices";
    menuContent.appendChild(foodAndPrices);
    
    // first dish 

    const firstDish = document.createElement('div');
    firstDish.id = "first-dish";
    firstDish.className = "dish-title";
    foodAndPrices.appendChild(firstDish);
    
    const firstDishTitle = document.createElement('p');
    firstDishTitle.id = "first";
    firstDishTitle.className = "dish-name";
    firstDishTitle.innerHTML = "Adana Kebab";
    firstDish.appendChild(firstDishTitle);

    const firstDishDescription = document.createElement('p');
    firstDishDescription.id = "first";
    firstDishDescription.innerHTML = "Very tasty dish yes yes"
    firstDish.appendChild(firstDishDescription);


    const firstDishPrice = document.createElement('p');
    firstDishPrice.id = "first";
    firstDishPrice.className= "dish-price";
    firstDishPrice.innerHTML = "5$";
    firstDish.appendChild(firstDishPrice);
    
    // second dish 

    const secondDish = document.createElement('div');
    secondDish.id = "second-dish";
    secondDish.className = "dish-title";
    foodAndPrices.appendChild(secondDish);

    const secondDishTitle = document.createElement('p');
    secondDishTitle.id = "second";
    secondDishTitle.className = "dish-name";
    secondDishTitle.innerHTML = "Doner Kebab";
    secondDish.appendChild(secondDishTitle);

    const secondDishDescription = document.createElement('p');
    secondDishDescription.id = "second";
    secondDishDescription.innerHTML = "Also a very good dish yes yes";
    secondDish.appendChild(secondDishDescription);

    const secondDishPrice = document.createElement('p');
    secondDishPrice.id = "second";
    secondDishPrice.className= "dish-price";
    secondDishPrice.innerHTML = "7$";
    secondDish.appendChild(secondDishPrice);


    // third dish 

    const thirdDish = document.createElement('div');
    thirdDish.id = "third-dish";
    thirdDish.className = "dishes";
    foodAndPrices.appendChild(thirdDish);

    const thirdDishTitle = document.createElement('p');
    thirdDishTitle.id = "third";
    thirdDishTitle.className = "dish-name";
    thirdDishTitle.innerHTML = "Turkish Pilav";
    thirdDish.appendChild(thirdDishTitle);

    const thirdDishDescription = document.createElement('p');
    thirdDishDescription.id = "third";
    thirdDishDescription.innerHTML = "Amazing pilav";
    thirdDish.appendChild(thirdDishDescription);

    const thirdDishPrice = document.createElement('p');
    thirdDishPrice.id = "third";
    thirdDishPrice.className= "dish-price";
    thirdDishPrice.innerHTML = "10$";
    thirdDish.appendChild(thirdDishPrice);

    content.appendChild(menu);
}