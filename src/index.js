import "./styles.css"
import {createHomePage} from "./modules/home";

const contentDiv = document.getElementById('content');
contentDiv.appendChild(createHomePage());

const tabHandler = (function() {
    const contentDiv = document.getElementById('content');

    /**Clear the content container, and then add the home page content.
     * This is done upon module initialization as the initial page load
     */
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createHomePage());
})();