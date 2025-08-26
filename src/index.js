import "./styles.css"
import {createHomePage} from "./modules/home";
import {createMenu} from "./modules/menu";

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

    const displayMenu = () => {
        clearContent();
        contentDiv.appendChild(createMenu());
    }

    return {displayMenu};
})();

tabHandler.displayMenu();