import "./styles.css"
import {createHomePage} from "./modules/home";
import {createMenu} from "./modules/menu";
import { createAbout } from "./modules/about";

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createHomePage());

const tabHandler = (function() {
    const contentDiv = document.getElementById('content');
    const tabButtons = document.getElementById('nav-buttons');

    // Render homepage upon website initial load
    clearContent();
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