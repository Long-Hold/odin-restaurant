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

export function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    return menuDiv;
}