import '../styles/pages/menuStyles.css';
import { foodImage } from "../images";

class MenuItem {
    #item;
    #image;
    #description
    #price;

    constructor(item, image, description, price) {
        this.#item = item;
        this.#image = image;
        this.#description = description;
        this.#price = price;
    }

    get item() { return this.#item; }
    get image() { return this.#image; }
    get description() { return this.#description; }
    get price() { return this.#price; }
}

const menuItems = {
    burratta: new MenuItem('Burratta', foodImage.buratta, 'A mystical twist on the classic.', '$14.50'),
    filetMignon: new MenuItem('Filet Mignon', foodImage.filetmignon, 'A classic cut of prime beef.', '$25.50'),
    mousse: new MenuItem('Chocolate Mousse', foodImage.mousse, 'A rich chocolate treat served with raspberry glaze.', '$20.00'),
    mushroomParadise: new MenuItem('Mushroom Paradise', foodImage.mushroompotato, 'A fully vegan dish served with rich mushrooms and potatos.', '$18.50'),
    sirloin: new MenuItem('Sirloin', foodImage.sirloin, 'A classic sirloin served with red wine sauce and grilled veggies.', '$20.00'),
};

export function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    const menuItemsList = Object.values(menuItems);

    menuItemsList.forEach((menuItem) => {
        const menuCard = document.createElement('article');
        menuCard.classList.add('menu-card');

        const image = document.createElement('img');
        image.src = menuItem.image;
        image.alt = menuItem.description;
        image.width = '200';

        const itemName = document.createElement('h3');
        itemName.textContent = menuItem.item;

        const description = document.createElement('p');
        description.textContent = menuItem.description;

        const price = document.createElement('p');
        price.textContent = menuItem.price;

        menuCard.appendChild(image);
        menuCard.appendChild(itemName);
        menuCard.appendChild(description);
        menuCard.appendChild(price);

        menuDiv.appendChild(menuCard);
    })

    return menuDiv;
}