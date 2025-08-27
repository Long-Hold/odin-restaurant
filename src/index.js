import "./styles.css"
import {createHomePage} from "./modules/home";
import {createMenu} from "./modules/menu";
import { createAbout } from "./modules/about";

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createHomePage());

const tabHandler = (function() {
    const contentDiv = document.getElementById('content');

    /**Clear the content container, and then add the home page content.
     * This is done upon module initialization as the initial page load
     */
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createHomePage());

    const clearContent = () => contentDiv.innerHTML = '';

    const displayHomePage = () => {
        clearContent();
        contentDiv.appendChild(createHomePage());
    }

    const displayMenu = () => {
        clearContent();
        contentDiv.appendChild(createMenu());
    }

    const displayAbout = () => {
        clearContent();
        contentDiv.appendChild(createAbout());
    }

    return {displayHomePage, displayMenu, displayAbout};
})();

tabHandler.displayAbout();